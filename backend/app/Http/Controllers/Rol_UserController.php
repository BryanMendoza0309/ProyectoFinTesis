<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ModelRoles\Roles;
use App\ModelRoles\Permisos;
use App\User;
//use App\IessModel\Area;
use App\Image;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
class Rol_UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       Gate::authorize('haveacceso','Admin.Rol_User.index');
        $nombre= $request->get('nombre');
        $Users = User::where('name','like',"%$nombre%")->orderBy('name')->paginate(7);

        return view('pgadmin.usuarios.index',compact('Users'));

    }
    public function create()
    {
      Gate::authorize('haveacceso','Admin.Rol.cretate');
      $roles= Roles::get();
      // $areas1= Area::get();
      return view('pgadmin.usuarios.create',compact('roles'));
    }


    public function store(Request $request)
    {
        Gate::authorize('haveacceso','Admin.Rol_User.store');



         $urlimagenes=[];

        if($request->hasFile('imagenes')){
            $imagenes=$request->file('imagenes');
            foreach ($imagenes as $imagen) {
                $nombre= time().'_'.$imagen->getClientOriginalName();

                $ruta=public_path().'/imagenes';
                $imagen->move($ruta,$nombre);

                $urlimagenes[]['url']='/imagenes/'.$nombre;
            }
        }else{
             $nombre= time().'_'.'unnamed.gif';
             
             $ruta=public_path().'/archivo';

             File::copy(public_path().'/imagenes/unnamed.png',public_path().'/imagenes/'.$nombre);
             $urlimagenes[]['url']='/imagenes/'.$nombre;
        }

         $usuario = new User();
    $usuario->name=$request->name;
    $usuario->email=$request->Correo;
    $usuario->cedula=$request->cedula;
    $usuario->password=Hash::make($request->password);
    $usuario->email_verified_at = now();

        

       $usuario->save();
        
        if($request->get('rol')){
            $usuario->roles()->sync($request->get('rol'));
        }

       
          $usuario->save();
          $usuario->image()->createMany($urlimagenes);
            return redirect()->route('Admin.Rol_User.index')->with('datos','Roles del Usuario editados correctamente');

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        Gate::authorize('haveacceso','Admin.Rol_User.show');
        $User= User::with('image')->where('id',$id)->firstOrFail();
        $roles= Roles::get();
        $roles_usuario=[];
        foreach ($User->roles as $rol){
            $roles_usuario[]=$rol->id;
        }
        $editar='Si';
       // return $roles;
        return view('pgadmin.usuarios.show',compact('roles','User','editar','roles_usuario'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        Gate::authorize('haveacceso','Admin.Rol_User.edit');
       $User= User::with('image')->where('id',$id)->firstOrFail();
        $roles= Roles::get();
        $roles_usuario=[];
        foreach ($User->roles as $rol){
            $roles_usuario[]=$rol->id;
        }
      //  $areas1= Area::get();
        $editar='Si';
        $userimg= $User->image;
        //return  $userimg;
        return view('pgadmin.usuarios.edit',compact('userimg','roles','User','editar','roles_usuario'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Gate::authorize('haveacceso','Admin.Rol_User.update');
        $User= User::findOrFail($id);
         $request->validate([
            'Correo'=>'required|unique:users,email,'.$User->id
         ]);

         $urlimagenes=[];

        if($request->hasFile('imagenes')){
            $imagenes=$request->file('imagenes');
            foreach ($imagenes as $imagen) {
                $nombre= time().'_'.$imagen->getClientOriginalName();

                $ruta=public_path().'/imagenes';
                $imagen->move($ruta,$nombre);

                $urlimagenes[]['url']='/imagenes/'.$nombre;
            }
        }else{
             $nombre= time().'_'.'unnamed.gif';
             
             $ruta=public_path().'/archivo';

             File::copy(public_path().'/imagenes/unnamed.png',public_path().'/imagenes/'.$nombre);
             $urlimagenes[]['url']='/imagenes/'.$nombre;
        }


        $User->image()->createMany($urlimagenes);

        $User->update($request->all());
        if($request->get('clave')!=$User->password){

            $User->password= Hash::make($request->clave);
             $User->save();
        }
        if($request->get('rol')){
            $User->roles()->sync($request->get('rol'));
        }

            return redirect()->route('Admin.Rol_User.index')->with('datos','Roles del Usuario editados correctamente');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        Gate::authorize('haveacceso','Admin.Rol_User.destroy');
        $User= User::with('image','horarios')->findOrFail($id);
    
        if($User->image)
        {

         $archivo=substr($User->image->url,1);
        File::delete($archivo);
       $User->image->delete();

        }
        if(!$User->horarios->isEmpty()){
           
            $User->horarios()->delete();
        }

        $User->delete();
         return redirect()->route('Admin.Rol_User.index')->with('datos','Usuario Removido correctamente');
    }
}

<?php

use Illuminate\Support\Facades\Route;
use App\User;
use App\ModelRoles\Roles;
use App\ModelRoles\Permisos;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    
    if(User::get()->isEmpty()){
        Roles::create([
            'nombre'=>'Super Administrador',
            'slug'=>'super_administrador',
            'descripcion'=>'Tiene acceso a todo',
            'fullacceso'=>'yes'
            ]); 
            //PERMISOS PEERSONAS
        
        Permisos::create([
            'nombre'=>'Ve lista Usuario',
            'slug'=>'Admin.Rol_User.index',
            'descripcion'=>'Ve lista de Usuario',       
           ]);
   
           Permisos::create([
            'nombre'=>'Crear Usuario',
            'slug'=>'Admin.Rol_User.create',
            'descripcion'=>'Crea Usuario',       
           ]);
   
           Permisos::create([
            'nombre'=>'Ve un solo Usuario',
            'slug'=>'Admin.Rol_User.show',
            'descripcion'=>'Ve lista un solo Usuario Mediante id',       
           ]);
   
           Permisos::create([
            'nombre'=>'Edita Usuario',
            'slug'=>'Admin.Rol_User.edit',
            'descripcion'=>'Edita cualquier Usuario',       
           ]);
   
           Permisos::create([
            'nombre'=>'Elimina Usuario',
            'slug'=>'Admin.Rol_User.destroy',
            'descripcion'=>'Elimina cualquier Usuario',       
           ]);
          
           //ROL PERMISOS
           Permisos::create([
            'nombre'=>'Ve lista Rol',
            'slug'=>'Admin.Rol.index',
            'descripcion'=>'Ve lista de Rol',       
           ]);
   
           Permisos::create([
            'nombre'=>'Crear Rol',
            'slug'=>'Admin.Rol.create',
            'descripcion'=>'Crea Rol',       
           ]);
   
           Permisos::create([
            'nombre'=>'Ve Rol',
            'slug'=>'Admin.Rol.show',
            'descripcion'=>'Ve lista de Rol y todos sus datos',       
           ]);
   
           Permisos::create([
            'nombre'=>'Edita Rol',
            'slug'=>'Admin.Rol.edit',
            'descripcion'=>'Edita cualquier Rol',       
           ]);
   
           Permisos::create([
            'nombre'=>'Elimina Rol',
            'slug'=>'Admin.Rol.destroy',
            'descripcion'=>'Elimina cualquier Rol',       
           ]);
            $rolid = Roles::where('slug','super_administrador')->firstOrFail();
    $usuarioMaster = new User();
    $usuarioMaster->name='ADMINRC5';
    $usuarioMaster->email='ADMINRC5@hotmail.com';
    $usuarioMaster->password=Hash::make('ADMINRC52022');
    $usuarioMaster->email_verified_at = now();
    $usuarioMaster->save();
    $usuario =  User::first();
    $usuario->roles()->sync([$rolid->id]);
    }
    return view('auth/login');
});

Auth::routes(["register" => false]);
Route::get('/admin', function () {
	//Gate::authorize('haveacceso','admin');
	return view('pgadmin.admin');
})->name('admin')->middleware('verified');
Route::get('/home', 'HomeController@index')->name('home');
Route::resource('/admin/rol', 'RolesController')->names('Admin.Rol')->middleware('verified');

Route::get('cancelar/{ruta}',function($ruta){
    return redirect()->route($ruta)->with('cancelar','Cancelado Correctamente');
    })->name('cancelar');

Route::resource('/admin/roles-usuario', 'Rol_UserController')->names('Admin.Rol_User')->middleware('verified');
<?php

use Illuminate\Support\Facades\Route;
use App\User;
use App\ModelRoles\Roles;
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

Route::get('/home', 'HomeController@index')->name('home');

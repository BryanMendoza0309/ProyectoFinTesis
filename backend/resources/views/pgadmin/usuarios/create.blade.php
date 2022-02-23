@extends('layouts.plantillaadmin')
@section('titulo','Crear Usuario')
@section('breadcrumb')
<li class="breadcrumb-item"><a href="{{route('Admin.Rol_User.index')}}">Usuario</a></li>
<li class="breadcrumb-item active">@yield('titulo')</li>
@endsection
@section('contenido')
<div id='apiUsuario'>
    <form action="{{ route('Admin.Rol_User.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Ver Rol de Usuario</h3>
                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                        <i class="fas fa-minus"></i></button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                        <i class="fas fa-times"></i></button>
                </div>
            </div>
            <div class="card-body">
                
                
                <div  class="card-body">
                    <div class="form-group">
                        <label for="archivosimagenes">Añadir Foto</label>
                        <input type="file" class="form-control-file" name="imagenes[]" id="imagenes[]" multiple accept="image/*">
                        <div class="descripcion">
                            Ingresar solo una Imagen / Limite de 2048 MB por imagen
                            <br>

                            Tipos permitidos: jpeg, png, jpg, gif, svg.
                            <br>
                        </div>
                    </div>
                </div>
                <div class="form-group" class="row">
                    <label for="nombre">Nombre</label>
                    <input class="form-control" type="text" name="name" id="name" >
                    <label for="Correo">Correo</label>
                    
                    <input v-model="Correo" @blur="getCorreo" class="form-control" type="text" name="Correo" id="email">
                    <div v-if="div_aparecer" v-bind:class="div_class_Correo">
                        @{{ div_mensajeCorreo }}
                    </div>
                    <br>
                    <label for="Clave">Clave</label>
                    <input class="form-control" type="password" name="clave" id="clave" >
                    
                    <br>
                    <label for="nombre">Roles del Usuario</label>
                    <hr>
                    @foreach ($roles as $rol)
                    <div class="form-group form-check">
                        
                        <input type="checkbox" class="form-check-input" id="rol_{{$rol->id}}" value="{{$rol->id}}" name="rol[]">
                        
                        <label class="form-check-label" for="exampleCheck1">{{$rol->nombre}}
                            <em>{{$rol->descripcion}}</em>
                        </label>
                    </div>
                    @endforeach
                </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                <a class="btn btn-danger" href="{{ route('cancelar','Admin.Rol_User.index') }}">Cancelar</a>
                <input :disabled="des_buton==1" type="submit" value="Guardar" class="btn btn-primary float-right">
            </div>
            <!-- /.card-footer-->
        </div>
        <!-- /.card -->
    </form>
</div>
@endsection

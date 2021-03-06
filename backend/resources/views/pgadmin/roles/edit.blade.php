@extends('layouts.plantillaadmin')
@section('titulo','Editar Roles')
@section('breadcrumb')
<li class="breadcrumb-item"><a href="{{route('Admin.Rol.index')}}">Roles</a></li>
<li class="breadcrumb-item active">@yield('titulo')</li>
@endsection
@section('contenido')
<div id=apirol>
    <form action="{{ route('Admin.Rol.update',$roles->id) }}" method="POST">
        @csrf
        @method('PUT')
        <span style="display:none" id='editar'>{{$editar}}</span>
<span style="display:none" id='nombretemp'>{{$roles->nombre}}</span>
        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Editar  Roles</h3>
                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                        <i class="fas fa-minus"></i></button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                        <i class="fas fa-times"></i></button>
                </div>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input v-model="nombre" @blur="getRol" @focus="div_aparecer= false" class="form-control" type="text" name="nombre" id="nombre"
                    
                    >
                    <label for="slug">Slug</label>
                    <input readonly v-model="generarSlug" class="form-control" type="text" name="slug" id="slug"  >
                    <div v-if="div_aparecer" v-bind:class="div_class_slug">
                        @{{ div_mensajeSlug }}
                    </div>
                    <br v-if="div_aparecer">
                    <label for="descripcion">Descripción</label>
                    <textarea class="form-control" name="descripcion" id="descripcion" cols="30" rows="5" >{!! $roles->descripcion !!}</textarea>

                    <br>
                    <label for="nombre">Full Accesos</label>
                    <div class="form-check"> 
                        @if ( $roles->fullacceso == "yes" )
                        <input class="form-check-input" type="radio" name="fullacceso" id="fullaccesoyes" value="Yes" checked  >
                        @else 
                        <input class="form-check-input" type="radio" name="fullacceso" id="fullaccesoyes" value="Yes"  >
                        @endif 
                        <label class="form-check-label" for="fullaccesoyes">
                            Yes
                        </label>
                    </div>
                    <div class="form-check">
                        @if ( $roles->fullacceso == "no" )
                        <input class="form-check-input" type="radio" name="fullacceso" id="fullaccesono" value="No" checked >
                         @else 
                         <input class="form-check-input" type="radio" name="fullacceso" id="fullaccesono" value="No" >
                          @endif 
                        <label class="form-check-label" for="fullaccesono">
                            No
                        </label>
                    </div>
                    <hr>
                    <label for="nombre">Permiso</label> / <label for="nombre">Descripcion</label>
                  @foreach ($permisos as $permiso)
                    <div class="form-group form-check">
                  @if(in_array($permiso->id,$roles_permisos))
                  <input type="checkbox" class="form-check-input" id="permiso_{{$permiso->id}}" value="{{$permiso->id}}" name="permiso[]" checked>
                  @else
                  <input type="checkbox" class="form-check-input" id="permiso_{{$permiso->id}}" value="{{$permiso->id}}" name="permiso[]">
                  @endif

                    
                        
                        <label class="form-check-label" for="exampleCheck1">{{$permiso->nombre}} <em>    /{{$permiso->descripcion}}</em>
                        </label>
                    </div>


                  @endforeach 
                </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                <a class="btn btn-danger" href="{{ route('cancelar','Admin.Rol.index') }}">Cancelar</a>
                <input :disabled="des_buton==1" type="submit" value="Guardar" class="btn btn-primary float-right">
            </div>
            <!-- /.card-footer-->
        </div>
        <!-- /.card -->
    </form>
</div>
@endsection

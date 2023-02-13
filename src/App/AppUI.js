import React from 'react'

import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';

import { TodoContext } from '../TodoContext';

import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {
    //traigo elementos del estado
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter/>
            
            <TodoSearch/>
            
            <TodoList>

                {error && <TodosError />}
                {loading && <TodosLoading />}
                {//sino está cargando, y ya traje la lista
                    (!loading && !searchedTodos.length) && <EmptyTodos />
                }

                {/* list searched todos */}
                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete = {() => completeTodo(todo.text)}
                        onDelete = { () => deleteTodo(todo.text)}
                    />
                )
                )} 
            </TodoList>

            <CreateTodoButton
                setOpenModal= {setOpenModal}
            />
            
            {
                // si es true, renderiza el modal
                !!openModal && (
                    <Modal>
                       <TodoForm/>
                    </Modal>
                )
            }
        </React.Fragment>
    );
}

export {AppUI};
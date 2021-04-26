import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
import { GoPlus } from 'react-icons/go';
import { motion } from 'framer-motion';
import '../css/main.scss';

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {

    const [todo, setTodo] = useState("");

    const add = () => {
        if (todo === "") {
            alert('You need to add a todo');
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo('');
        }
    };

  const handleChange = (e) => {
        setTodo(e.target.value);
  };
  
  const submitEnter = (e) => {
    if (e.which === 13) {
      setTodo(e.target.value);
      add();
    }
  }

    return (
      <div className="addTodos">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => submitEnter(e)}
          className="todo_input"
          value={todo}
        />

        <motion.button
          className="add_btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => add()}
        >
          <GoPlus />
        </motion.button>
      </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
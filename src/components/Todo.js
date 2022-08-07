import React, { useState } from "react";
import { BsPencilSquare, BsTrash, BsEyeFill, BsXCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Del, Update } from "../action/action";
const Todo = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState("");
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalUpdateValue, setModalUpdateValue] = useState("");
  const [indexUpdate, setIndexUpdate] = useState("");
  const { userData } = useSelector((state) => state.AddReducer);
  const dispatch = useDispatch();

  const deleteTodo = (index) => {
    console.log(index);
    dispatch(Del(index));
  };

  const updateTodo = (indexUpdate) => {
    console.table(indexUpdate, modalUpdateValue);
    dispatch(Update(indexUpdate, modalUpdateValue));
    setModalUpdate(false);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {userData.map((element, index) => {
            return (
              <div className="col-xl-6 col-md-5 col-sm-12">
                <div className="product-card text-left">
                  <div className="product-image-caption">
                    <div className="product-image-txt d-flex justify-content-between align-items-center mb-flex">
                      <div className="heading">
                        <h3>{element}</h3>
                      </div>
                      <div className="icons">
                        <BsEyeFill
                          className="fas"
                          onClick={() => {
                            setModalValue(element);
                            setModal(true);
                          }}
                        />
                        <BsPencilSquare
                          className="fas fa-edit"
                          onClick={() => {
                            setModalUpdate(true);
                            setIndexUpdate(index);
                            setModalUpdateValue(element);
                          }}
                        />
                        <BsTrash
                          className="fas fa-delete"
                          onClick={() => deleteTodo(index)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modal && (
        <div
          className="modal show fade"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.08)" }}
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <BsXCircle
                  type="button"
                  className="close ms-auto"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setModal(false);
                  }}
                />
              </div>
              <div className="modal-body">
                {modalValue && <h5> {modalValue}</h5>}
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      )}

      {modalUpdate && (
        <div
          className="modal show fade"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.08)" }}
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Update Details
                </h5>
                <BsXCircle
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setModalUpdate(false);
                  }}
                />
              </div>
              <div className="modal-body">
                {modalUpdateValue && (
                  <div className="form-container w-50 mx-auto">
                    <input
                      type="search"
                      className="form-control mx-auto"
                      placeholder="search"
                      maxLength={32}
                      onChange={(e) => {
                        setModalUpdateValue(e.target.value);
                      }}
                      value={modalUpdateValue}
                    />
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => updateTodo(indexUpdate)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;

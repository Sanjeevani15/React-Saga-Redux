import React, { useEffect} from "react";
import firebaseDb from "../firebase";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { getContactsStart , deleteContactsStart} from "../redux/actions";

const ListRecord = () => {
  // const [data, setData] = useState({});
  const {contacts:data}=useSelector(state=>state.data);


  // console.log("data", data);
  let dispatch=useDispatch();

useEffect(()=>{dispatch(getContactsStart())},[]);
  // useEffect(() => {
  //   firebaseDb.child("contacts").on("value", (snapshot) => {
  //     if (snapshot.val() !== null) {
  //       setData({
  //         ...snapshot.val(),
  //       });
  //     } else {
  //       setData({});
  //     }
  //   });
  // }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteContactsStart(id));
      dispatch(getContactsStart());
    }
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div class="jumbotron">
              <h1 class="display-2">Contacts Directory</h1>
            </div>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((id, index) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data[id].fullName}</td>
                      <td>{data[id].mobile}</td>
                      <td>{data[id].email}</td>
                      <td>{data[id].address}</td>
                      <td>
                        <Link to={`/update/${id}`}>
                          <a className="btn text-primary">
                            <i className="fas fa-pencil-alt" />
                          </a>
                        </Link>

                        <a
                          className="btn text-danger"
                          onClick={() => onDelete(id)}
                        >
                          <i className="fas fa-trash-alt" />
                        </a>
                        <Link to={`/view/${id}`}>
                          <a className="btn text-info">
                            <i className="fas fa-eye" />
                          </a>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRecord;

import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { FaBan } from "react-icons/fa";

const ManageAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [UsersLoader, setUsersLoader] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setUsersLoader(true);
      try {
        const res = await axios.get("/api/auth/users");
        if (res.data.success) {
          setUsers(res.data.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setUsersLoader(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="mb-10">
      <h2 className="text-2xl">Manage Job Posts</h2>
      {UsersLoader ? (
        <div className="flex items-center justify-center mt-10">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="overflow-x-auto mt-10">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>No.</th>
                <th>image</th>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
                <th>role</th>
                <th>createdAt</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, idx) => (
                <tr>
                  <th>{idx + 1}</th>
                  <td>
                    <img
                      className="w-10 rounded-full border border-gray-400"
                      src="https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
                      alt=""
                    />
                    {/* {u?.image} */}
                  </td>
                  <td>{u?.name}</td>
                  <td>{u?.email}</td>
                  <td>{u?.phone}</td>
                  <td>{u?.role}</td>
                  <td>{u?.createdAt}</td>
                  <td className="mx-auto flex items-center">
                    <button className="btn btn-sm btn-error text-white mx-auto">
                      <FaBan /> Ban User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageAllUsers;

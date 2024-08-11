import CustomToolbar from "@/app/public/components/custom-toolbar";
import {useEffect, useState} from "react";
import {User} from "@/app/models/user.model";
import {any} from "prop-types";

function Profile() {
    const [user, setUser] = useState<User>({} as User);
    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user") as any) as User);

    }, []);
  return (
      <div>
          <CustomToolbar/>
          <div className="profile-container">
              <div className="flex justify-center">
                  <div className="bg-white rounded-lg p-10 mt-36 w-1/2">
                      <h2 className="text-2xl text-center text-black">Profile</h2>
                      <div className="flex justify-between">
                          <label>First Name:</label>
                          <span>{user.firstname}</span>
                      </div>
                      <div className="flex justify-between">
                          <label>Last Name:</label>
                          <span>{user.lastname}</span>
                      </div>
                      <div className="flex justify-between">
                          <label>Address:</label>
                          <span>{user.address}</span>
                      </div>
                      <div className="flex justify-between">
                          <label>Phone:</label>
                          <span>{user.phone}</span>
                      </div>
                      <div className="flex justify-between">
                          <label>DNI:</label>
                          <span>{user.dni}</span>
                      </div>
                      <div className="flex justify-between">
                          <label>Username:</label>
                          <span>{user.username}</span>
                      </div>
                      <div className="flex justify-between">
                          <label>Company:</label>
                          <span>{user.company}</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Profile;
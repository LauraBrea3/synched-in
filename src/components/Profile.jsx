import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fakeFetch from "../utils/fakeFetch";

export default function Profile(props) {
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    const getUser = async () => {
      const res = await fakeFetch(`/users/${params.id}`);
      setUser(await res.json());
    };
    getUser();
  }, [params.id]);

  return (
    <div className="profile">
      <div style={{textAlign:"center"}} className="profileView">
        <h1>{user.fullName}</h1>
        <p>{user.company}</p>
        <p>{user.devLevel}</p>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}

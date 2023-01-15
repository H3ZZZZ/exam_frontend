import { useEffect } from "react";

function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkIsAdmin = async () => {
      try {
        // Make a request to check if the user is logged in with an admin role
        const response = await fetch(
          "https://frederikhess.dk/tomcat/exam/api/user/role"
        );
        const data = await response.json();
        if (data.role === "admin") {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkIsAdmin();
  }, []);

  if (!isAdmin) {
    return <Redirect to="/" />;
  }

  return <div>Admin Page</div>;
}

export default AdminPage;

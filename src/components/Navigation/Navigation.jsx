import { Menubar } from "primereact/menubar";
import { useNavigate, Outlet } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Company",
      icon: "pi pi-user",
      items: [
        {
          label: "About Us",
          command: () => {
            navigate("/about");
          },
        },
        {
          label: "Blog",
          command: () => {
            navigate("/blog");
          },
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      command: () => {
        navigate("/contact");
      },
    },
  ];

  return (
    <>
      <div className="nav">
        <Menubar model={items} />
        <Outlet />
      </div>
    </>
  );
}

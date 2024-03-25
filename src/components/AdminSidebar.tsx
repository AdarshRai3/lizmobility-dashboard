import { useEffect, useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
  RiDashboardFill,
} from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";
import { FaMagnifyingGlassChart } from "react-icons/fa6";

import { IconType } from "react-icons";

const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Liz Mobility</h2>
        <DivOne location={location} />
       

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        Icon={RiDashboardFill}
        location={location}
      />
      <Li
        url="/admin/inspection"
        text="Inspection"
        Icon={FaMagnifyingGlassChart}
        location={location}
      />
      <Li
        url="/admin/issuetracker"
        text="IssueTracker"
        Icon={IoIosPeople}
        location={location}
      />
      <Li
        url="/admin/review"
        text="Review"
        Icon={AiFillFileText}
        location={location}
      />
    </ul>
  </div>
);
interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
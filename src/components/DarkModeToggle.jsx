import PropTypes from "prop-types";
import storage from "local-storage-fallback";
import { useDispatch } from "react-redux";
import { changeTheme } from "../store/actions/theme";

const onClickWrapper = (onClickMethod, isDark, event, callback) => {
  // when mobile device is zoomed in using the pinch gesture, we need to get the relative
  // coordinate on the page.
  // https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-
  // an-html-element-relative-to-the-browser-window
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = event.target.getBoundingClientRect();
  const offsetTop = elemRect.top - bodyRect.top;
  const offsetLeft = elemRect.left - bodyRect.left;

  // this tells us how much the user has zoomed in using the pinch gesture
  const deviceZoomRatio =
    document.documentElement.clientWidth / window.innerWidth;

  const customEventState = {
    x: offsetLeft + elemRect.width / 2,
    // if the user is pinch zoomed in, then use the pinch zoom coordinate detection logic,
    // otherwise, use the distance of the icon from the top of the page. For some reason
    // offsetTop doesn't work when the user scrolls down and the zoom ratio == 1 (iOS14)
    y: (deviceZoomRatio > 1 ? offsetTop : elemRect.top) + elemRect.height / 2,
  };

  const darkModeToggleEvent = new CustomEvent("darkModeToggle", {
    detail: customEventState,
  });
  onClickMethod(isDark);
  storage.setItem("theme", isDark.toString());
  callback();
  dispatchEvent(darkModeToggleEvent);
};

const DarkModeToggle = ({ isDark, onClickMethod }) => {
  const dispatch = useDispatch();

  function dispatchTheme() {
    dispatch(changeTheme(!isDark));
  }

  return (
    <>
      <label className="swap swap-rotate btn btn-ghost btn-circle">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          checked={!isDark ? false : true}
          onChange={(event) =>
            onClickWrapper(onClickMethod, !isDark, event, () => {
              dispatchTheme();
            })
          }
        />

        {/* sun icon */}
        <svg
          className="swap-on fill-yellow-500 w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-off fill-current w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </>
  );
};

DarkModeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onClickMethod: PropTypes.func.isRequired,
};

export default DarkModeToggle;

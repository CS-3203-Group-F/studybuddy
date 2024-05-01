const defaultColor = "#1C1B1F";

export function ChevronRight({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M12.5941 12.3965L7.99414 7.79648L9.39414 6.39648L15.3941 12.3965L9.39414 18.3965L7.99414 16.9965L12.5941 12.3965Z"
        fill={color}
      />
    </svg>
  );
}

export function ChevronLeft({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M13.9941 18.3965L7.99414 12.3965L13.9941 6.39648L15.3941 7.79648L10.7941 12.3965L15.3941 16.9965L13.9941 18.3965Z"
        fill={color}
      />
    </svg>
  );
}

export function ExpandMore({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M11.9941 15.7716L5.99414 9.77158L7.39414 8.37158L11.9941 12.9716L16.5941 8.37158L17.9941 9.77158L11.9941 15.7716Z"
        fill={color}
      />
    </svg>
  );
}

export function ExpandLess({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M7.39414 15.7716L5.99414 14.3716L11.9941 8.37158L17.9941 14.3716L16.5941 15.7716L11.9941 11.1716L7.39414 15.7716Z"
        fill={color}
      />
    </svg>
  );
}

export function MoreHoriz({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill={color}
    >
      <path
        d="M6.13672 14.2646C5.58672 14.2646 5.11589 14.0688 4.72422 13.6771C4.33255 13.2855 4.13672 12.8146 4.13672 12.2646C4.13672 11.7146 4.33255 11.2438 4.72422 10.8521C5.11589 10.4605 5.58672 10.2646 6.13672 10.2646C6.68672 10.2646 7.15755 10.4605 7.54922 10.8521C7.94089 11.2438 8.13672 11.7146 8.13672 12.2646C8.13672 12.8146 7.94089 13.2855 7.54922 13.6771C7.15755 14.0688 6.68672 14.2646 6.13672 14.2646ZM12.1367 14.2646C11.5867 14.2646 11.1159 14.0688 10.7242 13.6771C10.3326 13.2855 10.1367 12.8146 10.1367 12.2646C10.1367 11.7146 10.3326 11.2438 10.7242 10.8521C11.1159 10.4605 11.5867 10.2646 12.1367 10.2646C12.6867 10.2646 13.1576 10.4605 13.5492 10.8521C13.9409 11.2438 14.1367 11.7146 14.1367 12.2646C14.1367 12.8146 13.9409 13.2855 13.5492 13.6771C13.1576 14.0688 12.6867 14.2646 12.1367 14.2646ZM18.1367 14.2646C17.5867 14.2646 17.1159 14.0688 16.7242 13.6771C16.3326 13.2855 16.1367 12.8146 16.1367 12.2646C16.1367 11.7146 16.3326 11.2438 16.7242 10.8521C17.1159 10.4605 17.5867 10.2646 18.1367 10.2646C18.6867 10.2646 19.1576 10.4605 19.5492 10.8521C19.9409 11.2438 20.1367 11.7146 20.1367 12.2646C20.1367 12.8146 19.9409 13.2855 19.5492 13.6771C19.1576 14.0688 18.6867 14.2646 18.1367 14.2646Z"
        fill={color}
      />
    </svg>
  );
}

export function Check({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill={color}
    >
      <path
        d="M9.6668 18.2413L3.9668 12.5413L5.3918 11.1163L9.6668 15.3913L18.8418 6.21631L20.2668 7.64131L9.6668 18.2413Z"
        fill={color}
      />
    </svg>
  );
}

export function Close({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
        fill={color}
      />
    </svg>
  );
}

export function CalendarMonth({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8ZM12 14C11.7167 14 11.4792 13.9042 11.2875 13.7125C11.0958 13.5208 11 13.2833 11 13C11 12.7167 11.0958 12.4792 11.2875 12.2875C11.4792 12.0958 11.7167 12 12 12C12.2833 12 12.5208 12.0958 12.7125 12.2875C12.9042 12.4792 13 12.7167 13 13C13 13.2833 12.9042 13.5208 12.7125 13.7125C12.5208 13.9042 12.2833 14 12 14ZM8 14C7.71667 14 7.47917 13.9042 7.2875 13.7125C7.09583 13.5208 7 13.2833 7 13C7 12.7167 7.09583 12.4792 7.2875 12.2875C7.47917 12.0958 7.71667 12 8 12C8.28333 12 8.52083 12.0958 8.7125 12.2875C8.90417 12.4792 9 12.7167 9 13C9 13.2833 8.90417 13.5208 8.7125 13.7125C8.52083 13.9042 8.28333 14 8 14ZM16 14C15.7167 14 15.4792 13.9042 15.2875 13.7125C15.0958 13.5208 15 13.2833 15 13C15 12.7167 15.0958 12.4792 15.2875 12.2875C15.4792 12.0958 15.7167 12 16 12C16.2833 12 16.5208 12.0958 16.7125 12.2875C16.9042 12.4792 17 12.7167 17 13C17 13.2833 16.9042 13.5208 16.7125 13.7125C16.5208 13.9042 16.2833 14 16 14ZM12 18C11.7167 18 11.4792 17.9042 11.2875 17.7125C11.0958 17.5208 11 17.2833 11 17C11 16.7167 11.0958 16.4792 11.2875 16.2875C11.4792 16.0958 11.7167 16 12 16C12.2833 16 12.5208 16.0958 12.7125 16.2875C12.9042 16.4792 13 16.7167 13 17C13 17.2833 12.9042 17.5208 12.7125 17.7125C12.5208 17.9042 12.2833 18 12 18ZM8 18C7.71667 18 7.47917 17.9042 7.2875 17.7125C7.09583 17.5208 7 17.2833 7 17C7 16.7167 7.09583 16.4792 7.2875 16.2875C7.47917 16.0958 7.71667 16 8 16C8.28333 16 8.52083 16.0958 8.7125 16.2875C8.90417 16.4792 9 16.7167 9 17C9 17.2833 8.90417 17.5208 8.7125 17.7125C8.52083 17.9042 8.28333 18 8 18ZM16 18C15.7167 18 15.4792 17.9042 15.2875 17.7125C15.0958 17.5208 15 17.2833 15 17C15 16.7167 15.0958 16.4792 15.2875 16.2875C15.4792 16.0958 15.7167 16 16 16C16.2833 16 16.5208 16.0958 16.7125 16.2875C16.9042 16.4792 17 16.7167 17 17C17 17.2833 16.9042 17.5208 16.7125 17.7125C16.5208 17.9042 16.2833 18 16 18Z"
        fill={color}
      />
    </svg>
  );
}

export function Add({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill={color} />
    </svg>
  );
}

export function CalendarViewWeek({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM13 18H15.5V6H13V18ZM8.5 18H11V6H8.5V18ZM4 18H6.5V6H4V18ZM17.5 18H20V6H17.5V18Z"
        fill={color}
      />
    </svg>
  );
}

export function CalendarViewMonth({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M4.8833 20.1978C4.3333 20.1978 3.86247 20.0019 3.4708 19.6103C3.07913 19.2186 2.8833 18.7478 2.8833 18.1978V6.19775C2.8833 5.64775 3.07913 5.17692 3.4708 4.78525C3.86247 4.39359 4.3333 4.19775 4.8833 4.19775H20.8833C21.4333 4.19775 21.9041 4.39359 22.2958 4.78525C22.6875 5.17692 22.8833 5.64775 22.8833 6.19775V18.1978C22.8833 18.7478 22.6875 19.2186 22.2958 19.6103C21.9041 20.0019 21.4333 20.1978 20.8833 20.1978H4.8833ZM4.8833 11.1978H8.8833V6.19775H4.8833V11.1978ZM10.8833 11.1978H14.8833V6.19775H10.8833V11.1978ZM16.8833 11.1978H20.8833V6.19775H16.8833V11.1978ZM8.8833 18.1978V13.1978H4.8833V18.1978H8.8833ZM10.8833 18.1978H14.8833V13.1978H10.8833V18.1978ZM16.8833 18.1978H20.8833V13.1978H16.8833V18.1978Z"
        fill={color}
      />
    </svg>
  );
}

// Special Icon, used for RSVP
export function HandThumbsUp({ color = defaultColor }) {
  return (
    <svg
      className="cursor-pointer fill-stone-300 hover:fill-lime-500"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="22"
      viewBox="0 0 21 22"
    >
      <path d="M0.492188 14.5782C0.492188 17.7325 2.55274 20.3887 5.04297 20.3887H8.15821C9.39844 21.043 10.9024 21.4239 12.582 21.4239H13.8906C15.0625 21.4239 16.0781 21.3555 16.752 21.1895C18.0606 20.8672 18.8809 19.959 18.8809 18.8067C18.8809 18.5625 18.8418 18.3477 18.7832 18.1329C19.4277 17.6446 19.7891 16.9317 19.7891 16.1504C19.7891 15.7696 19.711 15.3887 19.5742 15.086C20.0137 14.6368 20.2578 13.9825 20.2578 13.2989C20.2578 12.8594 20.1504 12.3907 19.9649 12.0489C20.2285 11.668 20.3848 11.1309 20.3848 10.5645C20.3848 9.1582 19.2813 8.04492 17.875 8.04492H14.3106C14.0957 8.04492 13.959 7.94727 13.959 7.76172C13.959 6.74609 15.5606 4.36328 15.5606 2.44922C15.5606 1.13086 14.6426 0.193359 13.3828 0.193359C12.4551 0.193359 11.8301 0.671875 11.2149 1.84375C10.0723 4.04102 8.70508 6.01367 6.47852 8.72852H4.69141C2.36719 8.72852 0.492188 11.3555 0.492188 14.5782ZM5.99024 14.5293C5.99024 12.4883 6.44922 11.1895 7.71875 9.48047C9.13477 7.58594 11.0977 5.32031 12.5137 2.50781C12.8652 1.79492 13.0996 1.63867 13.4414 1.63867C13.8418 1.63867 14.1152 1.92188 14.1152 2.44922C14.1152 3.97266 12.5137 6.27734 12.5137 7.76172C12.5137 8.83594 13.3926 9.49024 14.5156 9.49024H17.875C18.4805 9.49024 18.9395 9.94922 18.9395 10.5645C18.9395 11.0137 18.793 11.2969 18.4317 11.668C18.2559 11.8243 18.2363 12.0196 18.3828 12.2051C18.6856 12.6543 18.8125 12.9278 18.8125 13.2989C18.8125 13.7383 18.6074 14.1192 18.1777 14.4414C17.9434 14.627 17.8457 14.8711 17.9824 15.1641C18.2266 15.6036 18.3438 15.8086 18.3438 16.1504C18.3438 16.6485 18.0215 17.0293 17.3379 17.3809C17.1231 17.5079 17.0742 17.6836 17.1621 17.8887C17.3965 18.4746 17.4258 18.5625 17.4258 18.8067C17.4258 19.2559 17.0938 19.6172 16.4102 19.793C15.8535 19.9297 14.9649 19.9883 13.9004 19.9883H12.6895C8.66602 19.9883 5.99024 17.7032 5.99024 14.5293ZM1.9375 14.5782C1.9375 12.1465 3.2461 10.1738 4.69141 10.1738C4.97461 10.1738 5.25781 10.1738 5.54102 10.1738C4.84766 11.4825 4.54492 12.8496 4.54492 14.5C4.54492 16.2481 5.16992 17.7715 6.29297 18.9336C5.87305 18.9336 5.46289 18.9336 5.04297 18.9336C3.39258 18.9336 1.9375 16.9414 1.9375 14.5782Z" />
    </svg>
  );
}

// Special Icon, used for RSVP
export function HandThumbsDown({ color = defaultColor }) {
  return (
    <svg
      className="cursor-pointer fill-stone-300 hover:fill-red-500"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="22"
      viewBox="0 0 21 22"
    >
      <path d="M20.6387 7.04883C20.6387 3.88477 18.5781 1.23828 16.0879 1.23828H12.9727C11.7324 0.583984 10.2285 0.193359 8.54882 0.193359H7.24023C6.06836 0.193359 5.05273 0.261719 4.3789 0.4375C3.07031 0.75 2.25 1.66797 2.25 2.82031C2.25 3.05469 2.28906 3.2793 2.34765 3.48438C1.70312 3.98242 1.3418 4.68555 1.3418 5.47656C1.3418 5.85742 1.41016 6.22852 1.55664 6.54102C1.11719 6.99024 0.863282 7.64453 0.863282 8.32813C0.863282 8.76758 0.980469 9.23633 1.16602 9.57813C0.902344 9.95898 0.746094 10.4961 0.746094 11.0528C0.746094 12.4688 1.84961 13.5821 3.25586 13.5821H6.82031C7.03515 13.5821 7.17187 13.6797 7.17187 13.8653C7.17187 14.8809 5.57031 17.2637 5.57031 19.1778C5.57031 20.4961 6.48828 21.4336 7.74804 21.4336C8.67578 21.4336 9.30078 20.9551 9.90625 19.7832C11.0586 17.5762 12.4258 15.6133 14.6523 12.8985H16.4395C18.7637 12.8985 20.6387 10.2715 20.6387 7.04883ZM15.1406 7.09766C15.1406 9.13867 14.6816 10.4375 13.4121 12.1465C11.9961 14.0313 10.0234 16.3067 8.61718 19.1192C8.25586 19.8223 8.03125 19.9883 7.68945 19.9883C7.28906 19.9883 7.01562 19.7051 7.01562 19.1778C7.01562 17.6446 8.61718 15.3399 8.61718 13.8653C8.61718 12.7911 7.73828 12.1368 6.61523 12.1368H3.25586C2.65039 12.1368 2.1914 11.6778 2.1914 11.0528C2.1914 10.6036 2.32812 10.3204 2.69921 9.95898C2.875 9.80274 2.89453 9.59766 2.74804 9.42188C2.44531 8.97266 2.30859 8.69922 2.30859 8.32813C2.30859 7.87891 2.52343 7.50781 2.95312 7.17578C3.1875 7 3.28515 6.75586 3.13867 6.46289C2.90429 6.02344 2.78711 5.81836 2.78711 5.47656C2.78711 4.97852 3.10937 4.58789 3.79297 4.23633C4.00781 4.11914 4.05664 3.94336 3.95898 3.72852C3.73437 3.15234 3.70507 3.06445 3.70507 2.82031C3.70507 2.37109 4.02734 2.00977 4.71093 1.83398C5.26757 1.6875 6.15625 1.62891 7.23047 1.62891H8.4414C12.4649 1.63867 15.1406 3.92383 15.1406 7.09766ZM19.1934 7.04883C19.1934 9.4707 17.8848 11.4532 16.4395 11.4532C16.1563 11.4532 15.8731 11.4532 15.5899 11.4532C16.2832 10.1348 16.5859 8.76758 16.5859 7.12695C16.5859 5.37891 15.9609 3.85547 14.8379 2.69336C15.2481 2.69336 15.668 2.69336 16.0879 2.69336C17.7383 2.69336 19.1934 4.67578 19.1934 7.04883Z" />
    </svg>
  );
}

export function CalendarAddOn({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M17 22V19H14V17H17V14H19V17H22V19H19V22H17ZM5 20C4.45 20 3.97917 19.8042 3.5875 19.4125C3.19583 19.0208 3 18.55 3 18V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H14V2H16V4H17C17.55 4 18.0208 4.19583 18.4125 4.5875C18.8042 4.97917 19 5.45 19 6V12.1C18.6667 12.05 18.3333 12.025 18 12.025C17.6667 12.025 17.3333 12.05 17 12.1V10H5V18H12C12 18.3333 12.025 18.6667 12.075 19C12.125 19.3333 12.2167 19.6667 12.35 20H5Z"
        fill={color}
      />
    </svg>
  );
}

export function Schedule({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M15.3 16.7L16.7 15.3L13 11.6V7H11V12.4L15.3 16.7ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
        fill={color}
      />
    </svg>
  );
}

export function Distance({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M12 22C10.2333 22 8.79167 21.7208 7.675 21.1625C6.55833 20.6042 6 19.8833 6 19C6 18.4167 6.24167 17.9083 6.725 17.475C7.20833 17.0417 7.875 16.7 8.725 16.45L9.3 18.35C9.01667 18.4333 8.75833 18.5375 8.525 18.6625C8.29167 18.7875 8.13333 18.9 8.05 19C8.26667 19.2667 8.76667 19.5 9.55 19.7C10.3333 19.9 11.15 20 12 20C12.85 20 13.6708 19.9 14.4625 19.7C15.2542 19.5 15.7583 19.2667 15.975 19C15.8917 18.9 15.7333 18.7875 15.5 18.6625C15.2667 18.5375 15.0083 18.4333 14.725 18.35L15.3 16.45C16.15 16.7 16.8125 17.0417 17.2875 17.475C17.7625 17.9083 18 18.4167 18 19C18 19.8833 17.4417 20.6042 16.325 21.1625C15.2083 21.7208 13.7667 22 12 22ZM12 19C11.8167 19 11.65 18.9458 11.5 18.8375C11.35 18.7292 11.2417 18.5833 11.175 18.4C10.7917 17.2167 10.3083 16.225 9.725 15.425C9.14167 14.625 8.575 13.8583 8.025 13.125C7.49167 12.3917 7.02917 11.6333 6.6375 10.85C6.24583 10.0667 6.05 9.1 6.05 7.95C6.05 6.28333 6.625 4.875 7.775 3.725C8.925 2.575 10.3333 2 12 2C13.6667 2 15.075 2.575 16.225 3.725C17.375 4.875 17.95 6.28333 17.95 7.95C17.95 9.1 17.7583 10.0667 17.375 10.85C16.9917 11.6333 16.525 12.3917 15.975 13.125C15.4417 13.8583 14.8792 14.625 14.2875 15.425C13.6958 16.225 13.2083 17.2167 12.825 18.4C12.7583 18.5833 12.65 18.7292 12.5 18.8375C12.35 18.9458 12.1833 19 12 19ZM12 10.075C12.5833 10.075 13.0833 9.86667 13.5 9.45C13.9167 9.03333 14.125 8.53333 14.125 7.95C14.125 7.36667 13.9167 6.86667 13.5 6.45C13.0833 6.03333 12.5833 5.825 12 5.825C11.4167 5.825 10.9167 6.03333 10.5 6.45C10.0833 6.86667 9.875 7.36667 9.875 7.95C9.875 8.53333 10.0833 9.03333 10.5 9.45C10.9167 9.86667 11.4167 10.075 12 10.075Z"
        fill={color}
      />
    </svg>
  );
}

export function ProgressActivity({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill={color}
    >
      <path
        d="M10.3704 20.8267C9.00369 20.8267 7.71203 20.5642 6.49536 20.0392C5.27869 19.5142 4.21619 18.7975 3.30786 17.8892C2.39953 16.9808 1.68286 15.9183 1.15786 14.7017C0.632861 13.485 0.370361 12.1933 0.370361 10.8267C0.370361 9.44333 0.632861 8.14749 1.15786 6.93916C1.68286 5.73083 2.39953 4.67249 3.30786 3.76416C4.21619 2.85583 5.27869 2.13916 6.49536 1.61416C7.71203 1.08916 9.00369 0.82666 10.3704 0.82666C10.6537 0.82666 10.8912 0.922493 11.0829 1.11416C11.2745 1.30583 11.3704 1.54333 11.3704 1.82666C11.3704 2.10999 11.2745 2.34749 11.0829 2.53916C10.8912 2.73083 10.6537 2.82666 10.3704 2.82666C8.15369 2.82666 6.26619 3.60583 4.70786 5.16416C3.14953 6.72249 2.37036 8.60999 2.37036 10.8267C2.37036 13.0433 3.14953 14.9308 4.70786 16.4892C6.26619 18.0475 8.15369 18.8267 10.3704 18.8267C12.587 18.8267 14.4745 18.0475 16.0329 16.4892C17.5912 14.9308 18.3704 13.0433 18.3704 10.8267C18.3704 10.5433 18.4662 10.3058 18.6579 10.1142C18.8495 9.92249 19.087 9.82666 19.3704 9.82666C19.6537 9.82666 19.8912 9.92249 20.0829 10.1142C20.2745 10.3058 20.3704 10.5433 20.3704 10.8267C20.3704 12.1933 20.1079 13.485 19.5829 14.7017C19.0579 15.9183 18.3412 16.9808 17.4329 17.8892C16.5245 18.7975 15.4662 19.5142 14.2579 20.0392C13.0495 20.5642 11.7537 20.8267 10.3704 20.8267Z"
        fill={color}
      />
    </svg>
  );
}

export function PersonApple({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill={color}
    >
      <path
        d="M2.37992 17.9903H14.5904C16.2028 17.9903 16.9702 17.5045 16.9702 16.4361C16.9702 13.891 13.755 10.2094 8.48999 10.2094C3.21532 10.2094 0 13.891 0 16.4361C0 17.5045 0.767403 17.9903 2.37992 17.9903ZM1.92337 16.5235C1.6708 16.5235 1.56394 16.4555 1.56394 16.2514C1.56394 14.6486 4.03129 11.6762 8.48999 11.6762C12.9389 11.6762 15.4063 14.6486 15.4063 16.2514C15.4063 16.4555 15.3092 16.5235 15.0567 16.5235H1.92337ZM8.48999 8.99513C10.8019 8.99513 12.6864 6.94548 12.6864 4.43927C12.6864 1.9525 10.8116 0 8.48999 0C6.18778 0 4.29356 1.99136 4.29356 4.45871C4.29356 6.95519 6.17807 8.99513 8.48999 8.99513ZM8.48999 7.52832C7.07176 7.52832 5.85752 6.17807 5.85752 4.45871C5.85752 2.76847 7.05234 1.46681 8.48999 1.46681C9.93738 1.46681 11.1225 2.73933 11.1225 4.43927C11.1225 6.15864 9.91794 7.52832 8.48999 7.52832Z"
        fill={color}
      />
    </svg>
  );
}

export function SettingsGear({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M9.24995 22L8.84995 18.8C8.63328 18.7167 8.42912 18.6167 8.23745 18.5C8.04578 18.3833 7.85828 18.2583 7.67495 18.125L4.69995 19.375L1.94995 14.625L4.52495 12.675C4.50828 12.5583 4.49995 12.4458 4.49995 12.3375V11.6625C4.49995 11.5542 4.50828 11.4417 4.52495 11.325L1.94995 9.375L4.69995 4.625L7.67495 5.875C7.85828 5.74167 8.04995 5.61667 8.24995 5.5C8.44995 5.38333 8.64995 5.28333 8.84995 5.2L9.24995 2H14.75L15.15 5.2C15.3666 5.28333 15.5708 5.38333 15.7625 5.5C15.9541 5.61667 16.1416 5.74167 16.325 5.875L19.3 4.625L22.05 9.375L19.475 11.325C19.4916 11.4417 19.5 11.5542 19.5 11.6625V12.3375C19.5 12.4458 19.4833 12.5583 19.45 12.675L22.025 14.625L19.275 19.375L16.325 18.125C16.1416 18.2583 15.95 18.3833 15.75 18.5C15.55 18.6167 15.35 18.7167 15.15 18.8L14.75 22H9.24995ZM11 20H12.975L13.325 17.35C13.8416 17.2167 14.3208 17.0208 14.7625 16.7625C15.2041 16.5042 15.6083 16.1917 15.975 15.825L18.45 16.85L19.425 15.15L17.275 13.525C17.3583 13.2917 17.4166 13.0458 17.45 12.7875C17.4833 12.5292 17.5 12.2667 17.5 12C17.5 11.7333 17.4833 11.4708 17.45 11.2125C17.4166 10.9542 17.3583 10.7083 17.275 10.475L19.425 8.85L18.45 7.15L15.975 8.2C15.6083 7.81667 15.2041 7.49583 14.7625 7.2375C14.3208 6.97917 13.8416 6.78333 13.325 6.65L13 4H11.025L10.675 6.65C10.1583 6.78333 9.67912 6.97917 9.23745 7.2375C8.79578 7.49583 8.39162 7.80833 8.02495 8.175L5.54995 7.15L4.57495 8.85L6.72495 10.45C6.64162 10.7 6.58328 10.95 6.54995 11.2C6.51662 11.45 6.49995 11.7167 6.49995 12C6.49995 12.2667 6.51662 12.525 6.54995 12.775C6.58328 13.025 6.64162 13.275 6.72495 13.525L4.57495 15.15L5.54995 16.85L8.02495 15.8C8.39162 16.1833 8.79578 16.5042 9.23745 16.7625C9.67912 17.0208 10.1583 17.2167 10.675 17.35L11 20ZM12.05 15.5C13.0166 15.5 13.8416 15.1583 14.525 14.475C15.2083 13.7917 15.55 12.9667 15.55 12C15.55 11.0333 15.2083 10.2083 14.525 9.525C13.8416 8.84167 13.0166 8.5 12.05 8.5C11.0666 8.5 10.2375 8.84167 9.56245 9.525C8.88745 10.2083 8.54995 11.0333 8.54995 12C8.54995 12.9667 8.88745 13.7917 9.56245 14.475C10.2375 15.1583 11.0666 15.5 12.05 15.5Z"
        fill={color}
      />
    </svg>
  );
}

export function PaintBrush({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill={color}
    >
      <path
        d="M0.968693 15.9058C2.58947 18.093 5.98787 18.6855 8.09663 17.1171C9.9004 15.7838 10.2838 13.6837 8.95058 11.9235C7.7045 10.2505 5.85717 9.84096 4.41066 10.9302C3.0513 11.9498 3.53057 13.4137 2.77246 13.9801C2.11021 14.4767 1.49152 14.1979 1.01226 14.5639C0.663708 14.8427 0.550428 15.3481 0.968693 15.9058ZM2.74632 15.7663C2.63304 15.6444 2.64175 15.5224 2.72018 15.444C2.84217 15.3307 3.33015 15.2959 3.70484 14.9211C4.55009 14.0846 4.26253 12.856 5.23848 12.0979C6.04887 11.453 7.17295 11.6883 7.93106 12.6643C8.78502 13.7709 8.48875 15.1215 7.31237 16.0278C5.99659 17.0647 3.96625 17.056 2.74632 15.7663ZM9.49084 13.8319C10.4319 13.7273 11.2249 13.2567 12.1137 12.368C14.9108 9.57954 19.1807 3.33171 19.5553 2.80888C20.6533 1.28396 18.7711 -0.580808 17.2375 0.490997C16.7233 0.856978 10.4668 5.11805 7.67836 7.93263C6.80698 8.81272 6.32771 9.59698 6.21443 10.5206L7.58251 10.8953C7.59994 10.2592 7.93977 9.64054 8.66302 8.926C11.4253 6.19857 17.5337 2.00721 17.9084 1.72836C18.2047 1.51052 18.5358 1.82422 18.3092 2.14663C18.0827 2.47775 13.839 8.66459 11.1203 11.3833C10.4058 12.0979 9.85682 12.3854 9.25556 12.4551L9.49084 13.8319ZM11.0332 11.6447L12.1486 11.3572C12.0266 9.69282 10.3971 8.03719 8.75888 7.89777L8.38418 9.01315C9.49955 8.987 11.0332 10.5206 11.0332 11.6447Z"
        fill={color}
      />
    </svg>
  );
}

export function SettingsGearApple({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill={color}
    >
      <path
        d="M8.65429 17.9916H10.3542C11.0021 17.9916 11.4986 17.5961 11.6501 16.9734L12.0119 15.3998L12.2812 15.3071L13.6529 16.1487C14.1999 16.4937 14.831 16.4096 15.2939 15.9468L16.472 14.7771C16.9348 14.3142 17.0189 13.6746 16.6739 13.1361L15.8157 11.7728L15.9166 11.5204L17.4902 11.1501C18.1046 10.9986 18.5085 10.4937 18.5085 9.85416V8.18795C18.5085 7.5484 18.113 7.04349 17.4902 6.89202L15.9334 6.51334L15.8241 6.24406L16.6823 4.8808C17.0274 4.34223 16.9432 3.71109 16.4804 3.23984L15.3023 2.06171C14.8478 1.6073 14.2167 1.52314 13.6698 1.85975L12.298 2.70127L12.0119 2.59187L11.6501 1.01823C11.4986 0.395513 11.0021 0 10.3542 0H8.65429C8.00633 0 7.50983 0.395513 7.35836 1.01823L6.9881 2.59187L6.70198 2.70127L5.33872 1.85975C4.79174 1.52314 4.15218 1.6073 3.69776 2.06171L2.52805 3.23984C2.06522 3.71109 1.97266 4.34223 2.32609 4.8808L3.17603 6.24406L3.07504 6.51334L1.51823 6.89202C0.895513 7.04349 0.5 7.5484 0.5 8.18795V9.85416C0.5 10.4937 0.903928 10.9986 1.51823 11.1501L3.09187 11.5204L3.18444 11.7728L2.3345 13.1361C1.98107 13.6746 2.07364 14.3142 2.53647 14.7771L3.70618 15.9468C4.16901 16.4096 4.80857 16.4937 5.35555 16.1487L6.71881 15.3071L6.9881 15.3998L7.35836 16.9734C7.50983 17.5961 8.00633 17.9916 8.65429 17.9916ZM8.78894 16.6789C8.64588 16.6789 8.57015 16.62 8.5449 16.4853L8.03999 14.3984C7.52667 14.2721 7.04699 14.0702 6.68515 13.843L4.85064 14.9705C4.74966 15.0464 4.64026 15.0295 4.53928 14.9285L3.54629 13.9355C3.45373 13.843 3.44531 13.742 3.51264 13.6241L4.64026 11.8064C4.44671 11.453 4.22792 10.9734 4.09328 10.4601L2.00632 9.96356C1.87167 9.93831 1.81277 9.86258 1.81277 9.71952V8.31419C1.81277 8.16271 1.86325 8.09539 2.00632 8.07015L4.08486 7.56524C4.2195 7.01824 4.47196 6.52176 4.62343 6.21039L3.50421 4.39271C3.42848 4.26649 3.43689 4.16551 3.52946 4.06453L4.53087 3.08837C4.63185 2.98739 4.72442 2.97055 4.85064 3.04629L6.66831 4.14867C7.03017 3.94671 7.54349 3.73633 8.0484 3.59328L8.5449 1.50632C8.57015 1.37167 8.64588 1.31277 8.78894 1.31277H10.2195C10.3626 1.31277 10.4383 1.37167 10.4551 1.50632L10.9685 3.6101C11.4902 3.74475 11.9446 3.95513 12.3233 4.1571L14.1494 3.04629C14.2841 2.97055 14.3682 2.98739 14.4776 3.08837L15.4705 4.06453C15.5716 4.16551 15.5716 4.26649 15.4959 4.39271L14.3766 6.21039C14.5364 6.52176 14.7805 7.01824 14.9152 7.56524L17.0021 8.07015C17.1368 8.09539 17.1957 8.16271 17.1957 8.31419V9.71952C17.1957 9.86258 17.1284 9.93831 17.0021 9.96356L14.9068 10.4601C14.7721 10.9734 14.5618 11.453 14.3598 11.8064L15.4875 13.6241C15.5548 13.742 15.5548 13.843 15.4537 13.9355L14.4692 14.9285C14.3598 15.0295 14.2588 15.0464 14.1494 14.9705L12.3149 13.843C11.953 14.0702 11.4818 14.2721 10.9685 14.3984L10.4551 16.4853C10.4383 16.62 10.3626 16.6789 10.2195 16.6789H8.78894ZM9.50423 12.2104C11.263 12.2104 12.7104 10.763 12.7104 8.99581C12.7104 7.24546 11.263 5.79805 9.50423 5.79805C7.74546 5.79805 6.28964 7.24546 6.28964 8.99581C6.28964 10.7546 7.73704 12.2104 9.50423 12.2104ZM9.50423 10.9061C8.46074 10.9061 7.6024 10.0477 7.6024 8.99581C7.6024 7.96074 8.46074 7.1024 9.50423 7.1024C10.5309 7.1024 11.3893 7.96074 11.3893 8.99581C11.3893 10.0393 10.5309 10.9061 9.50423 10.9061Z"
        fill={color}
      />
    </svg>
  );
}

export function CameraApple({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill={color}
    >
      <path
        d="M2.95312 15.3984H17.2344C18.8594 15.3984 19.6875 14.5859 19.6875 12.9766V4.79688C19.6875 3.1875 18.8594 2.38281 17.2344 2.38281H15C14.3828 2.38281 14.1953 2.25781 13.8438 1.86719L13.2188 1.16406C12.8281 0.734375 12.4297 0.5 11.625 0.5H8.50781C7.70312 0.5 7.30469 0.734375 6.91406 1.16406L6.28906 1.86719C5.9375 2.25 5.74219 2.38281 5.13281 2.38281H2.95312C1.32031 2.38281 0.5 3.1875 0.5 4.79688V12.9766C0.5 14.5859 1.32031 15.3984 2.95312 15.3984ZM10.0938 13.0938C7.72656 13.0938 5.82812 11.2031 5.82812 8.82031C5.82812 6.44531 7.72656 4.55469 10.0938 4.55469C12.4609 4.55469 14.3516 6.44531 14.3516 8.82031C14.3516 11.2031 12.4531 13.0938 10.0938 13.0938ZM10.0938 11.9062C11.7969 11.9062 13.1719 10.5391 13.1719 8.82031C13.1719 7.10938 11.7969 5.73438 10.0938 5.73438C8.39062 5.73438 7.00781 7.10938 7.00781 8.82031C7.00781 10.5391 8.39844 11.9062 10.0938 11.9062ZM14.875 5.94531C14.875 5.41406 15.3438 4.94531 15.8906 4.94531C16.4297 4.94531 16.8906 5.41406 16.8906 5.94531C16.8906 6.5 16.4297 6.94531 15.8906 6.95312C15.3438 6.95312 14.875 6.50781 14.875 5.94531Z"
        fill={color}
      />
    </svg>
  );
}

export function ViewList({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M8.99268 20.084H19.9927C20.5427 20.084 21.0135 19.8882 21.4052 19.4965C21.7968 19.1048 21.9927 18.634 21.9927 18.084V16.084H8.99268V20.084ZM1.99268 8.08398H6.99268V4.08398H3.99268C3.44268 4.08398 2.97184 4.27982 2.58018 4.67148C2.18851 5.06315 1.99268 5.53398 1.99268 6.08398V8.08398ZM1.99268 14.084H6.99268V10.084H1.99268V14.084ZM3.99268 20.084H6.99268V16.084H1.99268V18.084C1.99268 18.634 2.18851 19.1048 2.58018 19.4965C2.97184 19.8882 3.44268 20.084 3.99268 20.084ZM8.99268 14.084H21.9927V10.084H8.99268V14.084ZM8.99268 8.08398H21.9927V6.08398C21.9927 5.53398 21.7968 5.06315 21.4052 4.67148C21.0135 4.27982 20.5427 4.08398 19.9927 4.08398H8.99268V8.08398Z"
        fill={color}
      />
    </svg>
  );
}

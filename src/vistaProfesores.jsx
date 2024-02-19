import React, { useState } from 'react';

const Profesor = () => {
  const [isUsersSubMenuOpen, setIsUsersSubMenuOpen] = useState(false);
  const [isCoursesSubMenuOpen, setIsCoursesSubMenuOpen] = useState(false);
  const [isSubjectsSubMenuOpen, setIsSubjectsSubMenuOpen] = useState(false);
  const [isVideoConferencesSubMenuOpen, setIsVideoConferencesSubMenuOpen] = useState(false);

  const toggleUsersSubMenu = () => {
    setIsUsersSubMenuOpen(!isUsersSubMenuOpen);
    setIsCoursesSubMenuOpen(false);
    setIsSubjectsSubMenuOpen(false);
    setIsVideoConferencesSubMenuOpen(false);
  };

  const toggleCoursesSubMenu = () => {
    setIsCoursesSubMenuOpen(!isCoursesSubMenuOpen);
    setIsUsersSubMenuOpen(false);
    setIsSubjectsSubMenuOpen(false);
    setIsVideoConferencesSubMenuOpen(false);
  };

  const toggleSubjectsSubMenu = () => {
    setIsSubjectsSubMenuOpen(!isSubjectsSubMenuOpen);
    setIsUsersSubMenuOpen(false);
    setIsCoursesSubMenuOpen(false);
    setIsVideoConferencesSubMenuOpen(false);
  };

  const toggleVideoConferencesSubMenu = () => {
    setIsVideoConferencesSubMenuOpen(!isVideoConferencesSubMenuOpen);
    setIsUsersSubMenuOpen(false);
    setIsCoursesSubMenuOpen(false);
    setIsSubjectsSubMenuOpen(false);
  };

  return (
    <section className="mb-8">
      <div>
        <ul className="space-y-2">
          <li>
            <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#" data-te-dropdown-item-ref onClick={toggleUsersSubMenu}>
              <img src="https://tecdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/javascript.webp"
                alt="" className="mr-2 h-5" />
              <span>Foros</span>
            </a>
            {isUsersSubMenuOpen && (
              <ul className="pl-4">
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Crear foros </a>
                </li>
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Mostrar foros</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#" data-te-dropdown-item-ref onClick={toggleCoursesSubMenu}>
              <img src="https://tecdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/javascript.webp"
                alt="" className="mr-2 h-5" />
              <span>Cursos Asignados</span>
            </a>
            {isCoursesSubMenuOpen && (
              <ul className="pl-4">
              </ul>
            )}
          </li>
          <li>
            <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#" data-te-dropdown-item-ref onClick={toggleSubjectsSubMenu}>
              <img src="https://tecdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/javascript.webp"
                alt="" className="mr-2 h-5" />
              <span>Asignaturas asignadas</span>
            </a>
            {isSubjectsSubMenuOpen && (
              <ul className="pl-4">
              </ul>
            )}
          </li>
          <li>
            <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#" data-te-dropdown-item-ref onClick={toggleVideoConferencesSubMenu}>
              <img src="https://tecdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/javascript.webp"
                alt="" className="mr-2 h-5" />
              <span>Videoconferencias</span>
            </a>
            {isVideoConferencesSubMenuOpen && (
              <ul className="pl-4">
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Crear videoconferencia en jitsi</a>
                </li>
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Programar videoconferencias</a>
                </li>
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Mostrar videoconferencias</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profesor
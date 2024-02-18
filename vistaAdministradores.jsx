import React, { useState } from 'react';

const MyButtonWithSubMenu = () => {
  const [isUsersSubMenuOpen, setIsUsersSubMenuOpen] = useState(false);
  const [isCoursesSubMenuOpen, setIsCoursesSubMenuOpen] = useState(false);
  const [isSubjectsSubMenuOpen, setIsSubjectsSubMenuOpen] = useState(false);

  const toggleUsersSubMenu = () => {
    setIsUsersSubMenuOpen(!isUsersSubMenuOpen);
    setIsCoursesSubMenuOpen(false);
    setIsSubjectsSubMenuOpen(false);
  };

  const toggleCoursesSubMenu = () => {
    setIsCoursesSubMenuOpen(!isCoursesSubMenuOpen);
    setIsUsersSubMenuOpen(false);
    setIsSubjectsSubMenuOpen(false);
  };

  const toggleSubjectsSubMenu = () => {
    setIsSubjectsSubMenuOpen(!isSubjectsSubMenuOpen);
    setIsUsersSubMenuOpen(false);
    setIsCoursesSubMenuOpen(false);
  };

  return (
    <section className="mb-8">
      <div>
        {/* <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Opciones</h2> */}
        <ul className="space-y-2">
          <li>
            <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#" data-te-dropdown-item-ref onClick={toggleUsersSubMenu}>
              <img src="https://tecdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/javascript.webp"
                alt="" class="mr-2 h-5" />
              <span>Usuarios</span><br />
            </a>
            {isUsersSubMenuOpen && (
              <ul className="pl-4">
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Registrar usuarios</a>
                </li>
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Mostrar profesores</a>
                </li>
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Mostrar alumnos</a>
                </li>
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Mostrar administradores</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#" data-te-dropdown-item-ref onClick={toggleCoursesSubMenu}>
              <img src="https://tecdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/javascript.webp"
                alt="" class="mr-2 h-5" />
              <span>Cursos </span>
            </a>
            {isCoursesSubMenuOpen && (
              <ul className="pl-4">
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Registrar cursos</a>
                </li>
                
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Mostrar cursos</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#" data-te-dropdown-item-ref onClick={toggleSubjectsSubMenu}>
              <img src="https://tecdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/javascript.webp"
                alt="" class="mr-2 h-5" />
              <span>Asignaturas</span>
            </a>
            {isSubjectsSubMenuOpen && (
              <ul className="pl-4">
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Registrar asignaturas</a>
                </li>
                <li>
                  <a className="flex w-full items-center whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#">-Mostrar asignaturas</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MyButtonWithSubMenu;

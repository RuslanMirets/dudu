import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from '../NavLink';

export const Header: React.FC = () => {
  const isAuth = true;

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.body}>
          <Link href="/">
            <a>DuDu</a>
          </Link>
          <nav className={styles.menu}>
            <ul>
              <li>
                <NavLink href="/" activeClassName={styles.active}>
                  <a>Главная</a>
                </NavLink>
              </li>
              <li>
                <NavLink href="/about" activeClassName={styles.active}>
                  <a>О компании</a>
                </NavLink>
              </li>
              <li>
                <NavLink href="/contacts" activeClassName={styles.active}>
                  <a>Контакты</a>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.actions}>
            <ul>
              {isAuth ? (
                <li>
                  <LoginIcon />
                </li>
              ) : (
                <>
                  <li>
                    <AccountCircleIcon />
                  </li>
                  <li>
                    <LogoutIcon />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

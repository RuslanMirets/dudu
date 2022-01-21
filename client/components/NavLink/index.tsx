import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link, { LinkProps } from 'next/link';
import React, { Children } from 'react';
import cx from 'classnames';

type NavLinkProps = React.PropsWithChildren<LinkProps> & {
  activeClassName?: any;
};

export const NavLink: React.FC<NavLinkProps> = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children) as React.ReactElement;
  const childClassName = child.props.className || '';

  const isActive = asPath === props.href || asPath === props.as;

  const className = cx(childClassName, { [activeClassName]: isActive });

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

NavLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};

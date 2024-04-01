'use client';
import React from 'react';
import { SheetClose } from './ui/sheet';

// link (next js)
import Link from 'next/link';

// next hooks
import { usePathname } from 'next/navigation';

// framer motion
import { motion } from 'framer-motion';
import { Sheet } from 'lucide-react';

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'my projects' },
  { path: '/contact', name: 'contact' }
];

export default function Nav({
  containerStyles,
  linkStyles,
  underlineStyles,
  withSheetClose
}) {
  const [SheetCloseWrapper, sheetCloseWrapperProps] = withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];

  const path = usePathname();
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <SheetCloseWrapper {...sheetCloseWrapperProps} key={index}>
            <Link
              href={link.path}
              key={index}
              className={`capitalize ${linkStyles}`}
            >
              {path === link.path && (
                <motion.span
                  initial={{ y: '-100%' }}
                  animate={{ y: 0 }}
                  transition={{ type: 'tween' }}
                  layoutId='underline'
                  className={underlineStyles}
                />
              )}
              {link.name}
            </Link>
          </SheetCloseWrapper>
        );
      })}
    </nav>
  );
}

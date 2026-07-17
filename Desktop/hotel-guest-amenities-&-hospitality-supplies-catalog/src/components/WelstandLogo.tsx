/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface WelstandLogoProps {
  className?: string;
}

export default function WelstandLogo({ className = 'h-10 w-10' }: WelstandLogoProps) {
  return (
    <img
      src="/welstand-logo.png"
      alt="Welstand Enterprises Logo"
      className={className}
    />
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as LucideIcons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className = '', size = 24 }: DynamicIconProps) {
  // Safe lookup with fallbacks
  // We casting LucideIcons as any to access by string index
  const IconComponent = (LucideIcons as any)[name];

  if (!IconComponent) {
    // Return a default icon like HelpCircle if not found
    const Fallback = LucideIcons.HelpCircle;
    return <Fallback className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}

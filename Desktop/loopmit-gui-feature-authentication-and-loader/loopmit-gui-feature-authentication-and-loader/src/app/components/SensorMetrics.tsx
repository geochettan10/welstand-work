"use client";

import { Battery, Gauge, Move, Compass } from 'lucide-react';
import { useESP } from '../context/ESPContext';
import React from 'react';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

export function SensorMetrics() {
  const { sensorData, isConnected } = useESP();

  const metrics = [
    {
      label: 'Voltage',
      value: `${sensorData.voltage.toFixed(2)}V`,
      icon: <Battery className="size-6" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      label: 'Gap Height',
      value: `${sensorData.gapHeight.toFixed(1)}mm`,
      icon: <Gauge className="size-6" />,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      label: 'Acceleration',
      value: `${sensorData.acceleration.magnitude.toFixed(2)}m/s²`,
      icon: <Move className="size-6" />,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      label: 'Orientation',
      value: `X:${sensorData.orientation.x.toFixed(0)}° Y:${sensorData.orientation.y.toFixed(0)}° Z:${sensorData.orientation.z.toFixed(0)}°`,
      icon: <Compass className="size-6" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <CardContainer key={metric.label} className="h-auto">
          <CardBody className="bg-gradient-to-br from-card to-card/80 relative group/card border border-border rounded-lg p-6 w-full h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="flex items-start justify-between mb-4">
              <CardItem
                translateZ={50}
                className={`p-3 rounded-lg ${metric.bgColor}`}
              >
                <div className={`${metric.color}`}>{metric.icon}</div>
              </CardItem>
              {!isConnected && (
                <CardItem
                  translateZ={30}
                  className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground"
                >
                  Offline
                </CardItem>
              )}
            </div>
            
            <div className="space-y-3">
              <CardItem
                translateZ={60}
                className="text-2xl font-bold text-foreground"
              >
                {metric.value}
              </CardItem>
              <CardItem
                translateZ={40}
                className="text-sm text-muted-foreground font-medium"
              >
                {metric.label}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
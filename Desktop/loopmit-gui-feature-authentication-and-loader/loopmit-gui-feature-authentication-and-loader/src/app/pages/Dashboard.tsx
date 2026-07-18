import { TemperatureChart } from '../components/TemperatureChart';
import { SensorMetrics } from '../components/SensorMetrics';
import { IMUCalibration } from '../components/IMUCalibration';
import { ConnectionControl } from '../components/ConnectionControl';
import { useESP } from '../context/ESPContext';
import React, { useEffect } from 'react';
import { Error_log } from '../components/error_log';
import Pod from '../components/pod';
import { useClerk } from '@clerk/clerk-react';
import { Button } from '../components/ui/button';
import ShinyText from '../components/ui/ShinyText';
import { LogOut, AlertTriangle } from 'lucide-react';

export function Dashboard() {
  const { isConnected, turnAllOff } = useESP();
  const { signOut } = useClerk();

  const handleLogout = async () => {
    await signOut();
  };

  const handleEmergencyStop = () => {
    turnAllOff();
  };

  // Global keyboard shortcut: Control+Spacebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault();
        handleEmergencyStop();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [turnAllOff]);

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Fixed Header */}
      <div className="fixed top-0 left-10 right-0 bg-background border-b border-border z-50 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-start justify-between">
          <div>
            <h1 className="text-foreground mb-2">
              <ShinyText 
                text="LoopMIT Control Center" 
                speed={3}
                color="#373e43"
                shineColor="#ffffff"
                spread={120}
              />
            </h1>
            <p className="text-muted-foreground">
              Real-time sensor telemetry and system monitoring for hyperloop pod prototype.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={handleEmergencyStop}
              className="bg-red-500 hover:bg-red-600 text-white transition font-medium duration-200 h-12 rounded-lg px-8 flex items-center justify-center gap-2"
              style={{
                boxShadow:
                  "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
              }}
            >
              <AlertTriangle className="size-5" />
              Emergency Stop
            </Button>
            <Button
              onClick={handleLogout}
              className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black transition font-medium duration-200 h-10 rounded-lg px-6 flex items-center justify-center gap-2"
              style={{
                boxShadow:
                  "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
              }}
            >
              <LogOut className="size-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content with top padding to account for fixed header */}
      <div className="pt-32 px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <ConnectionControl />
          <Error_log />
          <SensorMetrics />
          <Pod/>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TemperatureChart />
            <IMUCalibration />
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="mb-4 text-foreground">System Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Pod Status</div>
                <div className="flex items-center gap-2">
                  <div className={`size-3 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                  <span className="text-foreground">{isConnected ? 'Operational' : 'Disconnected'}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Connection</div>
                <div className="flex items-center gap-2">
                  <div className={`size-3 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                  <span className="text-foreground">{isConnected ? 'Connected' : 'Offline'}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Data Rate</div>
                <div className="text-foreground">{isConnected ? '100 Hz' : 'N/A'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
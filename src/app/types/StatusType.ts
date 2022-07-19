

export interface StatusType {

  flightId?: string;
  carrierFsCode?: string;
  flightNumber?: string;
  operatedBy?: string;
  codeShares?: string[];
  departureAirportFsCode?: string;
  arrivalAirportFsCode?: string;
  departureDate?: {
    dateUtc?: Date;
    dateLocal?: Date;
  };
  arrivalDate?: {
    dateUtc?: Date;
     dateLocal?: Date;
  };
  status?: string;
  statusDescription?: string;
  statusInfo?: {
    status?: string;
    indicator?: string;
    displayStatus?: string;
    displayTime?: Date
  };
  operationalTimes?: {
    publishedDeparture?: {
      dateUtc?: Date;
      dateLocal?: Date
    };
    scheduledGateDeparture?: {
      dateUtc?: Date;
      dateLocal?: Date;
    };
    actualGateDeparture?: {
      dateUtc?: Date;
      dateLocal?: Date;
    };
    takeoff?: {
      dateUtc?: Date;
      dateLocal?: Date;
    };
    publishedArrival?: {
      dateUtc?: Date;
      dateLocal?: Date;
    };
    scheduledGateArrival?: {
      dateUtc?: Date;
      dateLocal?: Date
    };
    estimatedGateArrival?: {
      dateUtc?: Date;
      dateLocal?: Date;
    };
    actualGateArrival?: {
      dateUtc?: Date;
      dateLocal?: Date;
    };
    landing?: {
      dateUtc?: Date;
      dateLocal?: Date;
    }
  };
  delays?: {
    departureGateDelayMinutes?: number;
    arrivalGateDelayMinutes?: number;
  };
  flightDurations?: {
    scheduledBlockMinutes?: number;
    blockMinutes?: number;
  };
  airportResources?: {
    departureTerminal?: string;
    departureGate?: string;
  };
  flightEquipment?: {
    scheduledEquipmentIataCode?: string;
    actualEquipmentIataCode?: string;
    tailNumber?: string
  }
}

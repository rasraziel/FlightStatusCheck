import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlightListItemComponent } from './flight-list-item.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const data = {
  "flightStatuses": [
    {
      "flightId": "EM2821-20220701-CPH-GZP",
      "carrierFsCode": "EM",
      "flightNumber": "2821",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "GZP",
      "departureDate": {
        "dateUtc": "2022-07-01T04:00:00.000Z",
        "dateLocal": "2022-07-01T06:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:50:00.000Z",
        "dateLocal": "2022-07-01T10:50:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T10:46:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T04:00:00.000Z",
          "dateLocal": "2022-07-01T06:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T04:00:00.000Z",
          "dateLocal": "2022-07-01T06:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T04:10:00.000Z",
          "dateLocal": "2022-07-01T06:10:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T04:20:00.000Z",
          "dateLocal": "2022-07-01T06:20:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:50:00.000Z",
          "dateLocal": "2022-07-01T10:50:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:50:00.000Z",
          "dateLocal": "2022-07-01T10:50:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T07:43:00.000Z",
          "dateLocal": "2022-07-01T10:43:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T07:46:00.000Z",
          "dateLocal": "2022-07-01T10:46:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:43:00.000Z",
          "dateLocal": "2022-07-01T10:43:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 10
      },
      "flightDurations": {
        "scheduledBlockMinutes": 230,
        "blockMinutes": 216
      },
      "airportResources": {
        "departureGate": "C32"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SEDOZ"
      }
    },
    {
      "flightId": "EM0585-20220701-CPH-PMI",
      "carrierFsCode": "EM",
      "flightNumber": "585",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "PMI",
      "departureDate": {
        "dateUtc": "2022-07-01T04:00:00.000Z",
        "dateLocal": "2022-07-01T06:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:05:00.000Z",
        "dateLocal": "2022-07-01T09:05:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T10:42:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T04:00:00.000Z",
          "dateLocal": "2022-07-01T06:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T04:00:00.000Z",
          "dateLocal": "2022-07-01T06:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T05:42:00.000Z",
          "dateLocal": "2022-07-01T07:42:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T05:51:00.000Z",
          "dateLocal": "2022-07-01T07:51:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:05:00.000Z",
          "dateLocal": "2022-07-01T09:05:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:05:00.000Z",
          "dateLocal": "2022-07-01T09:05:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T08:37:00.000Z",
          "dateLocal": "2022-07-01T10:37:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T08:42:00.000Z",
          "dateLocal": "2022-07-01T10:42:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T08:36:00.000Z",
          "dateLocal": "2022-07-01T10:36:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 102,
        "arrivalGateDelayMinutes": 97
      },
      "flightDurations": {
        "scheduledBlockMinutes": 185,
        "blockMinutes": 180
      },
      "airportResources": {
        "departureGate": "B4"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "EISIE"
      }
    },
    {
      "flightId": "EM2991-20220701-CPH-RHO",
      "carrierFsCode": "EM",
      "flightNumber": "2991",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "RHO",
      "departureDate": {
        "dateUtc": "2022-07-01T04:00:00.000Z",
        "dateLocal": "2022-07-01T06:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:35:00.000Z",
        "dateLocal": "2022-07-01T10:35:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T10:32:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T04:00:00.000Z",
          "dateLocal": "2022-07-01T06:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T04:00:00.000Z",
          "dateLocal": "2022-07-01T06:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T04:05:00.000Z",
          "dateLocal": "2022-07-01T06:05:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T04:16:00.000Z",
          "dateLocal": "2022-07-01T06:16:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:35:00.000Z",
          "dateLocal": "2022-07-01T10:35:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:35:00.000Z",
          "dateLocal": "2022-07-01T10:35:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T07:36:00.000Z",
          "dateLocal": "2022-07-01T10:36:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T07:32:00.000Z",
          "dateLocal": "2022-07-01T10:32:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:28:00.000Z",
          "dateLocal": "2022-07-01T10:28:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 5
      },
      "flightDurations": {
        "scheduledBlockMinutes": 215,
        "blockMinutes": 207
      },
      "airportResources": {
        "departureGate": "B7"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SEROG"
      }
    },
    {
      "flightId": "EM2807-20220701-CPH-AGP",
      "carrierFsCode": "EM",
      "flightNumber": "2807",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "AGP",
      "departureDate": {
        "dateUtc": "2022-07-01T04:00:00.000Z",
        "dateLocal": "2022-07-01T06:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:50:00.000Z",
        "dateLocal": "2022-07-01T09:50:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T09:32:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T04:00:00.000Z",
          "dateLocal": "2022-07-01T06:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T04:00:00.000Z",
          "dateLocal": "2022-07-01T06:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T03:59:00.000Z",
          "dateLocal": "2022-07-01T05:59:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T04:13:00.000Z",
          "dateLocal": "2022-07-01T06:13:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:50:00.000Z",
          "dateLocal": "2022-07-01T09:50:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:50:00.000Z",
          "dateLocal": "2022-07-01T09:50:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T07:26:00.000Z",
          "dateLocal": "2022-07-01T09:26:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T07:32:00.000Z",
          "dateLocal": "2022-07-01T09:32:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:26:00.000Z",
          "dateLocal": "2022-07-01T09:26:00.000"
        }
      },
      "delays": {},
      "flightDurations": {
        "scheduledBlockMinutes": 230,
        "blockMinutes": 213
      },
      "airportResources": {
        "departureGate": "B6"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SEDOY"
      }
    },
    {
      "flightId": "EM2835-20220701-CPH-PUY",
      "carrierFsCode": "EM",
      "flightNumber": "2835",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "PUY",
      "departureDate": {
        "dateUtc": "2022-07-01T04:10:00.000Z",
        "dateLocal": "2022-07-01T06:10:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T06:10:00.000Z",
        "dateLocal": "2022-07-01T08:10:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T08:29:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T04:10:00.000Z",
          "dateLocal": "2022-07-01T06:10:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T04:10:00.000Z",
          "dateLocal": "2022-07-01T06:10:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T04:23:00.000Z",
          "dateLocal": "2022-07-01T06:23:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T04:39:00.000Z",
          "dateLocal": "2022-07-01T06:39:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T06:10:00.000Z",
          "dateLocal": "2022-07-01T08:10:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T06:10:00.000Z",
          "dateLocal": "2022-07-01T08:10:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T06:26:00.000Z",
          "dateLocal": "2022-07-01T08:26:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T06:29:00.000Z",
          "dateLocal": "2022-07-01T08:29:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T06:26:00.000Z",
          "dateLocal": "2022-07-01T08:26:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 13,
        "arrivalGateDelayMinutes": 19
      },
      "flightDurations": {
        "scheduledBlockMinutes": 120,
        "blockMinutes": 126
      },
      "airportResources": {
        "departureGate": "E109"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPD"
      }
    },
    {
      "flightId": "EM0833-20220701-CPH-FRA",
      "carrierFsCode": "EM",
      "flightNumber": "833",
      "operatedBy": "EM",
      "codeShares": [
        "A31425",
        "AC9384",
        "EY4170",
        "EM3617",
        "UA9265"
      ],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "FRA",
      "departureDate": {
        "dateUtc": "2022-07-01T04:20:00.000Z",
        "dateLocal": "2022-07-01T06:20:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T05:55:00.000Z",
        "dateLocal": "2022-07-01T07:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T08:00:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T04:20:00.000Z",
          "dateLocal": "2022-07-01T06:20:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T04:20:00.000Z",
          "dateLocal": "2022-07-01T06:20:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T04:23:00.000Z",
          "dateLocal": "2022-07-01T06:23:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T04:37:00.000Z",
          "dateLocal": "2022-07-01T06:37:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T05:55:00.000Z",
          "dateLocal": "2022-07-01T07:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T05:55:00.000Z",
          "dateLocal": "2022-07-01T07:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T06:07:00.000Z",
          "dateLocal": "2022-07-01T08:07:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T06:00:00.000Z",
          "dateLocal": "2022-07-01T08:00:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T05:48:00.000Z",
          "dateLocal": "2022-07-01T07:48:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 3,
        "arrivalGateDelayMinutes": 5
      },
      "flightDurations": {
        "scheduledBlockMinutes": 95,
        "blockMinutes": 97
      },
      "airportResources": {
        "departureGate": "A8"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "DAINC"
      }
    },
    {
      "flightId": "EM2833-20220701-CPH-DBV",
      "carrierFsCode": "EM",
      "flightNumber": "2833",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "DBV",
      "departureDate": {
        "dateUtc": "2022-07-01T05:10:00.000Z",
        "dateLocal": "2022-07-01T07:10:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:30:00.000Z",
        "dateLocal": "2022-07-01T09:30:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T09:42:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T05:10:00.000Z",
          "dateLocal": "2022-07-01T07:10:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T05:10:00.000Z",
          "dateLocal": "2022-07-01T07:10:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T05:20:00.000Z",
          "dateLocal": "2022-07-01T07:20:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T05:30:00.000Z",
          "dateLocal": "2022-07-01T07:30:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:30:00.000Z",
          "dateLocal": "2022-07-01T09:30:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:30:00.000Z",
          "dateLocal": "2022-07-01T09:30:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T07:45:00.000Z",
          "dateLocal": "2022-07-01T09:45:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T07:42:00.000Z",
          "dateLocal": "2022-07-01T09:42:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:39:00.000Z",
          "dateLocal": "2022-07-01T09:39:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 10,
        "arrivalGateDelayMinutes": 12
      },
      "flightDurations": {
        "scheduledBlockMinutes": 140,
        "blockMinutes": 142
      },
      "airportResources": {
        "departureGate": "C27"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGEC"
      }
    },
    {
      "flightId": "EM0402-20220701-CPH-ARN",
      "carrierFsCode": "EM",
      "flightNumber": "402",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ARN",
      "departureDate": {
        "dateUtc": "2022-07-01T05:15:00.000Z",
        "dateLocal": "2022-07-01T07:15:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T06:30:00.000Z",
        "dateLocal": "2022-07-01T08:30:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T08:35:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T05:15:00.000Z",
          "dateLocal": "2022-07-01T07:15:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T05:15:00.000Z",
          "dateLocal": "2022-07-01T07:15:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T05:15:00.000Z",
          "dateLocal": "2022-07-01T07:15:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T05:29:00.000Z",
          "dateLocal": "2022-07-01T07:29:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T06:30:00.000Z",
          "dateLocal": "2022-07-01T08:30:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T06:30:00.000Z",
          "dateLocal": "2022-07-01T08:30:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T06:27:00.000Z",
          "dateLocal": "2022-07-01T08:27:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T06:35:00.000Z",
          "dateLocal": "2022-07-01T08:35:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T06:24:00.000Z",
          "dateLocal": "2022-07-01T08:24:00.000"
        }
      },
      "delays": {
        "arrivalGateDelayMinutes": 5
      },
      "flightDurations": {
        "scheduledBlockMinutes": 75,
        "blockMinutes": 80
      },
      "airportResources": {
        "departureGate": "E4",
        "arrivalGate": "3A"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKAL"
      }
    },
    {
      "flightId": "EM0681-20220701-CPH-FCO",
      "carrierFsCode": "EM",
      "flightNumber": "681",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "FCO",
      "departureDate": {
        "dateUtc": "2022-07-01T05:40:00.000Z",
        "dateLocal": "2022-07-01T07:40:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T08:15:00.000Z",
        "dateLocal": "2022-07-01T10:15:00.000"
      },
      "status": "C",
      "statusDescription": "CANCELLED",
      "statusInfo": {
        "status": "Cancelled",
        "indicator": "red",
        "displayStatus": "Cancelled",
        "displayTime": null
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T05:40:00.000Z",
          "dateLocal": "2022-07-01T07:40:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T05:40:00.000Z",
          "dateLocal": "2022-07-01T07:40:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T08:15:00.000Z",
          "dateLocal": "2022-07-01T10:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T08:15:00.000Z",
          "dateLocal": "2022-07-01T10:15:00.000"
        }
      },
      "delays": {},
      "flightDurations": {
        "scheduledBlockMinutes": 155
      },
      "airportResources": {
        "departureGate": "E5"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "---"
      }
    },
    {
      "flightId": "EM1205-20220701-CPH-AAL",
      "carrierFsCode": "EM",
      "flightNumber": "1205",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "AAL",
      "departureDate": {
        "dateUtc": "2022-07-01T05:45:00.000Z",
        "dateLocal": "2022-07-01T07:45:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T06:40:00.000Z",
        "dateLocal": "2022-07-01T08:40:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T08:40:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T05:45:00.000Z",
          "dateLocal": "2022-07-01T07:45:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T05:45:00.000Z",
          "dateLocal": "2022-07-01T07:45:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T05:53:00.000Z",
          "dateLocal": "2022-07-01T07:53:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T05:59:00.000Z",
          "dateLocal": "2022-07-01T07:59:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T06:40:00.000Z",
          "dateLocal": "2022-07-01T08:40:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T06:40:00.000Z",
          "dateLocal": "2022-07-01T08:40:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T06:38:00.000Z",
          "dateLocal": "2022-07-01T08:38:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T06:40:00.000Z",
          "dateLocal": "2022-07-01T08:40:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T06:35:00.000Z",
          "dateLocal": "2022-07-01T08:35:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 8
      },
      "flightDurations": {
        "scheduledBlockMinutes": 55,
        "blockMinutes": 47
      },
      "airportResources": {
        "departureGate": "A28"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATI"
      }
    },
    {
      "flightId": "EM2801-20220701-CPH-LIS",
      "carrierFsCode": "EM",
      "flightNumber": "2801",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "LIS",
      "departureDate": {
        "dateUtc": "2022-07-01T05:50:00.000Z",
        "dateLocal": "2022-07-01T07:50:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T09:35:00.000Z",
        "dateLocal": "2022-07-01T10:35:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T10:49:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T05:50:00.000Z",
          "dateLocal": "2022-07-01T07:50:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T05:50:00.000Z",
          "dateLocal": "2022-07-01T07:50:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:01:00.000Z",
          "dateLocal": "2022-07-01T08:01:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:11:00.000Z",
          "dateLocal": "2022-07-01T08:11:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T09:35:00.000Z",
          "dateLocal": "2022-07-01T10:35:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T09:35:00.000Z",
          "dateLocal": "2022-07-01T10:35:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T09:45:00.000Z",
          "dateLocal": "2022-07-01T10:45:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T09:49:00.000Z",
          "dateLocal": "2022-07-01T10:49:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T09:42:00.000Z",
          "dateLocal": "2022-07-01T10:42:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 11,
        "arrivalGateDelayMinutes": 14
      },
      "flightDurations": {
        "scheduledBlockMinutes": 225,
        "blockMinutes": 228
      },
      "airportResources": {
        "departureGate": "A17"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKAO"
      }
    },
    {
      "flightId": "EM0501-20220701-CPH-EMR",
      "carrierFsCode": "EM",
      "flightNumber": "501",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "EMR",
      "departureDate": {
        "dateUtc": "2022-07-01T05:50:00.000Z",
        "dateLocal": "2022-07-01T07:50:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:55:00.000Z",
        "dateLocal": "2022-07-01T08:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T08:59:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T05:50:00.000Z",
          "dateLocal": "2022-07-01T07:50:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T05:50:00.000Z",
          "dateLocal": "2022-07-01T07:50:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:01:00.000Z",
          "dateLocal": "2022-07-01T08:01:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:19:00.000Z",
          "dateLocal": "2022-07-01T08:19:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:55:00.000Z",
          "dateLocal": "2022-07-01T08:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:55:00.000Z",
          "dateLocal": "2022-07-01T08:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T07:47:00.000Z",
          "dateLocal": "2022-07-01T08:47:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T07:59:00.000Z",
          "dateLocal": "2022-07-01T08:59:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:53:00.000Z",
          "dateLocal": "2022-07-01T08:53:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 11,
        "arrivalGateDelayMinutes": 4
      },
      "flightDurations": {
        "scheduledBlockMinutes": 125,
        "blockMinutes": 118
      },
      "airportResources": {
        "departureGate": "C33"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKAW"
      }
    },
    {
      "flightId": "EM1416-20220701-CPH-ARN",
      "carrierFsCode": "EM",
      "flightNumber": "1416",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ARN",
      "departureDate": {
        "dateUtc": "2022-07-01T06:00:00.000Z",
        "dateLocal": "2022-07-01T08:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:15:00.000Z",
        "dateLocal": "2022-07-01T09:15:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T09:12:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:00:00.000Z",
          "dateLocal": "2022-07-01T08:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:00:00.000Z",
          "dateLocal": "2022-07-01T08:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T05:59:00.000Z",
          "dateLocal": "2022-07-01T07:59:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:13:00.000Z",
          "dateLocal": "2022-07-01T08:13:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:15:00.000Z",
          "dateLocal": "2022-07-01T09:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:15:00.000Z",
          "dateLocal": "2022-07-01T09:15:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T07:04:00.000Z",
          "dateLocal": "2022-07-01T09:04:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T07:12:00.000Z",
          "dateLocal": "2022-07-01T09:12:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:08:00.000Z",
          "dateLocal": "2022-07-01T09:08:00.000"
        }
      },
      "delays": {},
      "flightDurations": {
        "scheduledBlockMinutes": 75,
        "blockMinutes": 73
      },
      "airportResources": {
        "departureGate": "D1",
        "arrivalGate": "5A"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKBK"
      }
    },
    {
      "flightId": "EM1462-20220701-CPH-OSL",
      "carrierFsCode": "EM",
      "flightNumber": "1462",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "OSL",
      "departureDate": {
        "dateUtc": "2022-07-01T06:00:00.000Z",
        "dateLocal": "2022-07-01T08:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:10:00.000Z",
        "dateLocal": "2022-07-01T09:10:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T10:00:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:00:00.000Z",
          "dateLocal": "2022-07-01T08:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:00:00.000Z",
          "dateLocal": "2022-07-01T08:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:56:00.000Z",
          "dateLocal": "2022-07-01T08:56:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T07:08:00.000Z",
          "dateLocal": "2022-07-01T09:08:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:10:00.000Z",
          "dateLocal": "2022-07-01T09:10:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:10:00.000Z",
          "dateLocal": "2022-07-01T09:10:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T08:01:00.000Z",
          "dateLocal": "2022-07-01T10:01:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T08:00:00.000Z",
          "dateLocal": "2022-07-01T10:00:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:57:00.000Z",
          "dateLocal": "2022-07-01T09:57:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 56,
        "arrivalGateDelayMinutes": 50
      },
      "flightDurations": {
        "scheduledBlockMinutes": 70,
        "blockMinutes": 64
      },
      "airportResources": {
        "departureGate": "B7"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SEROZ"
      }
    },
    {
      "flightId": "EM1585-20220701-CPH-BCN",
      "carrierFsCode": "EM",
      "flightNumber": "1585",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "BCN",
      "departureDate": {
        "dateUtc": "2022-07-01T06:00:00.000Z",
        "dateLocal": "2022-07-01T08:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T08:55:00.000Z",
        "dateLocal": "2022-07-01T10:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T11:37:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:00:00.000Z",
          "dateLocal": "2022-07-01T08:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:00:00.000Z",
          "dateLocal": "2022-07-01T08:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:43:00.000Z",
          "dateLocal": "2022-07-01T08:43:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:53:00.000Z",
          "dateLocal": "2022-07-01T08:53:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T08:55:00.000Z",
          "dateLocal": "2022-07-01T10:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T08:55:00.000Z",
          "dateLocal": "2022-07-01T10:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T09:34:00.000Z",
          "dateLocal": "2022-07-01T11:34:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T09:37:00.000Z",
          "dateLocal": "2022-07-01T11:37:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T09:33:00.000Z",
          "dateLocal": "2022-07-01T11:33:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 43,
        "arrivalGateDelayMinutes": 42
      },
      "flightDurations": {
        "scheduledBlockMinutes": 175,
        "blockMinutes": 174
      },
      "airportResources": {
        "departureGate": "B6"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKAT"
      }
    },
    {
      "flightId": "EM1641-20220701-CPH-HAM",
      "carrierFsCode": "EM",
      "flightNumber": "1641",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "HAM",
      "departureDate": {
        "dateUtc": "2022-07-01T06:00:00.000Z",
        "dateLocal": "2022-07-01T08:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:05:00.000Z",
        "dateLocal": "2022-07-01T09:05:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T09:05:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:00:00.000Z",
          "dateLocal": "2022-07-01T08:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:00:00.000Z",
          "dateLocal": "2022-07-01T08:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:03:00.000Z",
          "dateLocal": "2022-07-01T08:03:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:14:00.000Z",
          "dateLocal": "2022-07-01T08:14:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:05:00.000Z",
          "dateLocal": "2022-07-01T09:05:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:05:00.000Z",
          "dateLocal": "2022-07-01T09:05:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T07:14:00.000Z",
          "dateLocal": "2022-07-01T09:14:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T07:05:00.000Z",
          "dateLocal": "2022-07-01T09:05:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:00:00.000Z",
          "dateLocal": "2022-07-01T09:00:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 3
      },
      "flightDurations": {
        "scheduledBlockMinutes": 65,
        "blockMinutes": 62
      },
      "airportResources": {
        "departureGate": "E5"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATG"
      }
    },
    {
      "flightId": "EM0755-20220701-CPH-GDN",
      "carrierFsCode": "EM",
      "flightNumber": "755",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "GDN",
      "departureDate": {
        "dateUtc": "2022-07-01T06:00:00.000Z",
        "dateLocal": "2022-07-01T08:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:15:00.000Z",
        "dateLocal": "2022-07-01T09:15:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T09:25:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:00:00.000Z",
          "dateLocal": "2022-07-01T08:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:00:00.000Z",
          "dateLocal": "2022-07-01T08:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:17:00.000Z",
          "dateLocal": "2022-07-01T08:17:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:22:00.000Z",
          "dateLocal": "2022-07-01T08:22:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:15:00.000Z",
          "dateLocal": "2022-07-01T09:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:15:00.000Z",
          "dateLocal": "2022-07-01T09:15:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T07:36:00.000Z",
          "dateLocal": "2022-07-01T09:36:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T07:25:00.000Z",
          "dateLocal": "2022-07-01T09:25:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:21:00.000Z",
          "dateLocal": "2022-07-01T09:21:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 17,
        "arrivalGateDelayMinutes": 10
      },
      "flightDurations": {
        "scheduledBlockMinutes": 75,
        "blockMinutes": 68
      },
      "airportResources": {
        "departureGate": "E3"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATD"
      }
    },
    {
      "flightId": "EM2862-20220701-CPH-BGO",
      "carrierFsCode": "EM",
      "flightNumber": "2862",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "BGO",
      "departureDate": {
        "dateUtc": "2022-07-01T06:05:00.000Z",
        "dateLocal": "2022-07-01T08:05:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:25:00.000Z",
        "dateLocal": "2022-07-01T09:25:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T09:20:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:05:00.000Z",
          "dateLocal": "2022-07-01T08:05:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:05:00.000Z",
          "dateLocal": "2022-07-01T08:05:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:08:00.000Z",
          "dateLocal": "2022-07-01T08:08:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:20:00.000Z",
          "dateLocal": "2022-07-01T08:20:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:25:00.000Z",
          "dateLocal": "2022-07-01T09:25:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:25:00.000Z",
          "dateLocal": "2022-07-01T09:25:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T07:20:00.000Z",
          "dateLocal": "2022-07-01T09:20:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T07:20:00.000Z",
          "dateLocal": "2022-07-01T09:20:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:17:00.000Z",
          "dateLocal": "2022-07-01T09:17:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 3
      },
      "flightDurations": {
        "scheduledBlockMinutes": 80,
        "blockMinutes": 72
      },
      "airportResources": {
        "departureGate": "D3"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPT"
      }
    },
    {
      "flightId": "EM1870-20220701-CPH-SVG",
      "carrierFsCode": "EM",
      "flightNumber": "1870",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "SVG",
      "departureDate": {
        "dateUtc": "2022-07-01T06:05:00.000Z",
        "dateLocal": "2022-07-01T08:05:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:15:00.000Z",
        "dateLocal": "2022-07-01T09:15:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T09:23:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:05:00.000Z",
          "dateLocal": "2022-07-01T08:05:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:05:00.000Z",
          "dateLocal": "2022-07-01T08:05:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:21:00.000Z",
          "dateLocal": "2022-07-01T08:21:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:29:00.000Z",
          "dateLocal": "2022-07-01T08:29:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:15:00.000Z",
          "dateLocal": "2022-07-01T09:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:15:00.000Z",
          "dateLocal": "2022-07-01T09:15:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T07:21:00.000Z",
          "dateLocal": "2022-07-01T09:21:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T07:23:00.000Z",
          "dateLocal": "2022-07-01T09:23:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:19:00.000Z",
          "dateLocal": "2022-07-01T09:19:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 16,
        "arrivalGateDelayMinutes": 8
      },
      "flightDurations": {
        "scheduledBlockMinutes": 70,
        "blockMinutes": 62
      },
      "airportResources": {
        "departureGate": "A8"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGEA"
      }
    },
    {
      "flightId": "EM2551-20220701-CPH-AMS",
      "carrierFsCode": "EM",
      "flightNumber": "2551",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "AMS",
      "departureDate": {
        "dateUtc": "2022-07-01T06:15:00.000Z",
        "dateLocal": "2022-07-01T08:15:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:45:00.000Z",
        "dateLocal": "2022-07-01T09:45:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T09:56:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:15:00.000Z",
          "dateLocal": "2022-07-01T08:15:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:15:00.000Z",
          "dateLocal": "2022-07-01T08:15:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:28:00.000Z",
          "dateLocal": "2022-07-01T08:28:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:35:00.000Z",
          "dateLocal": "2022-07-01T08:35:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:45:00.000Z",
          "dateLocal": "2022-07-01T09:45:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:45:00.000Z",
          "dateLocal": "2022-07-01T09:45:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T07:35:00.000Z",
          "dateLocal": "2022-07-01T09:35:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T07:56:00.000Z",
          "dateLocal": "2022-07-01T09:56:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:43:00.000Z",
          "dateLocal": "2022-07-01T09:43:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 13,
        "arrivalGateDelayMinutes": 11
      },
      "flightDurations": {
        "scheduledBlockMinutes": 90,
        "blockMinutes": 88
      },
      "airportResources": {
        "departureGate": "A12"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPS"
      }
    },
    {
      "flightId": "EM0789-20220701-CPH-OLB",
      "carrierFsCode": "EM",
      "flightNumber": "789",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "OLB",
      "departureDate": {
        "dateUtc": "2022-07-01T06:20:00.000Z",
        "dateLocal": "2022-07-01T08:20:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T09:05:00.000Z",
        "dateLocal": "2022-07-01T11:05:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T11:24:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:20:00.000Z",
          "dateLocal": "2022-07-01T08:20:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:20:00.000Z",
          "dateLocal": "2022-07-01T08:20:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:39:00.000Z",
          "dateLocal": "2022-07-01T08:39:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:49:00.000Z",
          "dateLocal": "2022-07-01T08:49:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T09:05:00.000Z",
          "dateLocal": "2022-07-01T11:05:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T09:05:00.000Z",
          "dateLocal": "2022-07-01T11:05:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T09:18:00.000Z",
          "dateLocal": "2022-07-01T11:18:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T09:24:00.000Z",
          "dateLocal": "2022-07-01T11:24:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T09:20:00.000Z",
          "dateLocal": "2022-07-01T11:20:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 19,
        "arrivalGateDelayMinutes": 19
      },
      "flightDurations": {
        "scheduledBlockMinutes": 165,
        "blockMinutes": 165
      },
      "airportResources": {
        "departureGate": "A21"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKAN"
      }
    },
    {
      "flightId": "EM0434-20220701-CPH-GOT",
      "carrierFsCode": "EM",
      "flightNumber": "434",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "GOT",
      "departureDate": {
        "dateUtc": "2022-07-01T06:20:00.000Z",
        "dateLocal": "2022-07-01T08:20:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T07:05:00.000Z",
        "dateLocal": "2022-07-01T09:05:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T09:25:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:20:00.000Z",
          "dateLocal": "2022-07-01T08:20:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:20:00.000Z",
          "dateLocal": "2022-07-01T08:20:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:40:00.000Z",
          "dateLocal": "2022-07-01T08:40:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:51:00.000Z",
          "dateLocal": "2022-07-01T08:51:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T07:05:00.000Z",
          "dateLocal": "2022-07-01T09:05:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T07:05:00.000Z",
          "dateLocal": "2022-07-01T09:05:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T07:17:00.000Z",
          "dateLocal": "2022-07-01T09:17:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T07:25:00.000Z",
          "dateLocal": "2022-07-01T09:25:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T07:21:00.000Z",
          "dateLocal": "2022-07-01T09:21:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 20,
        "arrivalGateDelayMinutes": 20
      },
      "flightDurations": {
        "scheduledBlockMinutes": 45,
        "blockMinutes": 45
      },
      "airportResources": {
        "departureGate": "E4",
        "arrivalGate": "14"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPI"
      }
    },
    {
      "flightId": "EM1685-20220701-CPH-MXP",
      "carrierFsCode": "EM",
      "flightNumber": "1685",
      "operatedBy": "EM Link",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "MXP",
      "departureDate": {
        "dateUtc": "2022-07-01T06:25:00.000Z",
        "dateLocal": "2022-07-01T08:25:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T08:30:00.000Z",
        "dateLocal": "2022-07-01T10:30:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T11:30:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:25:00.000Z",
          "dateLocal": "2022-07-01T08:25:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:25:00.000Z",
          "dateLocal": "2022-07-01T08:25:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T07:07:00.000Z",
          "dateLocal": "2022-07-01T09:07:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T07:17:00.000Z",
          "dateLocal": "2022-07-01T09:17:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T08:30:00.000Z",
          "dateLocal": "2022-07-01T10:30:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T08:30:00.000Z",
          "dateLocal": "2022-07-01T10:30:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T09:21:00.000Z",
          "dateLocal": "2022-07-01T11:21:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T09:30:00.000Z",
          "dateLocal": "2022-07-01T11:30:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T09:17:00.000Z",
          "dateLocal": "2022-07-01T11:17:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 42,
        "arrivalGateDelayMinutes": 60
      },
      "flightDurations": {
        "scheduledBlockMinutes": 125,
        "blockMinutes": 143
      },
      "airportResources": {
        "departureGate": "B15"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "EMJ",
        "actualEquipmentIataCode": "EMJ",
        "tailNumber": "SEREM"
      }
    },
    {
      "flightId": "EM0565-20220701-CPH-CDG",
      "carrierFsCode": "EM",
      "flightNumber": "565",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "CDG",
      "departureDate": {
        "dateUtc": "2022-07-01T06:25:00.000Z",
        "dateLocal": "2022-07-01T08:25:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T08:20:00.000Z",
        "dateLocal": "2022-07-01T10:20:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T11:08:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:25:00.000Z",
          "dateLocal": "2022-07-01T08:25:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:25:00.000Z",
          "dateLocal": "2022-07-01T08:25:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T07:15:00.000Z",
          "dateLocal": "2022-07-01T09:15:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T07:22:00.000Z",
          "dateLocal": "2022-07-01T09:22:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T08:20:00.000Z",
          "dateLocal": "2022-07-01T10:20:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T08:20:00.000Z",
          "dateLocal": "2022-07-01T10:20:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T08:52:00.000Z",
          "dateLocal": "2022-07-01T10:52:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T09:08:00.000Z",
          "dateLocal": "2022-07-01T11:08:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T08:54:00.000Z",
          "dateLocal": "2022-07-01T10:54:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 50,
        "arrivalGateDelayMinutes": 48
      },
      "flightDurations": {
        "scheduledBlockMinutes": 115,
        "blockMinutes": 113
      },
      "airportResources": {
        "departureGate": "B19"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGED"
      }
    },
    {
      "flightId": "EM0595-20220701-CPH-KEF",
      "carrierFsCode": "EM",
      "flightNumber": "595",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "KEF",
      "departureDate": {
        "dateUtc": "2022-07-01T06:30:00.000Z",
        "dateLocal": "2022-07-01T08:30:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T09:45:00.000Z",
        "dateLocal": "2022-07-01T09:45:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T09:34:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:30:00.000Z",
          "dateLocal": "2022-07-01T08:30:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:30:00.000Z",
          "dateLocal": "2022-07-01T08:30:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:35:00.000Z",
          "dateLocal": "2022-07-01T08:35:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:45:00.000Z",
          "dateLocal": "2022-07-01T08:45:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T09:45:00.000Z",
          "dateLocal": "2022-07-01T09:45:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T09:45:00.000Z",
          "dateLocal": "2022-07-01T09:45:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T09:27:00.000Z",
          "dateLocal": "2022-07-01T09:27:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T09:34:00.000Z",
          "dateLocal": "2022-07-01T09:34:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T09:29:00.000Z",
          "dateLocal": "2022-07-01T09:29:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 5
      },
      "flightDurations": {
        "scheduledBlockMinutes": 195,
        "blockMinutes": 179
      },
      "airportResources": {
        "departureGate": "B8"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "EISIJ"
      }
    },
    {
      "flightId": "EM0539-20220701-CPH-MAN",
      "carrierFsCode": "EM",
      "flightNumber": "539",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "MAN",
      "departureDate": {
        "dateUtc": "2022-07-01T06:30:00.000Z",
        "dateLocal": "2022-07-01T08:30:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T08:35:00.000Z",
        "dateLocal": "2022-07-01T09:35:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T09:35:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T06:30:00.000Z",
          "dateLocal": "2022-07-01T08:30:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T06:30:00.000Z",
          "dateLocal": "2022-07-01T08:30:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T06:46:00.000Z",
          "dateLocal": "2022-07-01T08:46:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T06:56:00.000Z",
          "dateLocal": "2022-07-01T08:56:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T08:35:00.000Z",
          "dateLocal": "2022-07-01T09:35:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T08:35:00.000Z",
          "dateLocal": "2022-07-01T09:35:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T08:36:00.000Z",
          "dateLocal": "2022-07-01T09:36:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T08:35:00.000Z",
          "dateLocal": "2022-07-01T09:35:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T08:27:00.000Z",
          "dateLocal": "2022-07-01T09:27:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 16
      },
      "flightDurations": {
        "scheduledBlockMinutes": 125,
        "blockMinutes": 109
      },
      "airportResources": {
        "departureGate": "E109"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGEF"
      }
    },
    {
      "flightId": "EM1418-20220701-CPH-ARN",
      "carrierFsCode": "EM",
      "flightNumber": "1418",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ARN",
      "departureDate": {
        "dateUtc": "2022-07-01T07:00:00.000Z",
        "dateLocal": "2022-07-01T09:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T08:15:00.000Z",
        "dateLocal": "2022-07-01T10:15:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T10:28:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T07:00:00.000Z",
          "dateLocal": "2022-07-01T09:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T07:00:00.000Z",
          "dateLocal": "2022-07-01T09:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T07:19:00.000Z",
          "dateLocal": "2022-07-01T09:19:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T07:28:00.000Z",
          "dateLocal": "2022-07-01T09:28:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T08:15:00.000Z",
          "dateLocal": "2022-07-01T10:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T08:15:00.000Z",
          "dateLocal": "2022-07-01T10:15:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T08:24:00.000Z",
          "dateLocal": "2022-07-01T10:24:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T08:28:00.000Z",
          "dateLocal": "2022-07-01T10:28:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T08:22:00.000Z",
          "dateLocal": "2022-07-01T10:22:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 19,
        "arrivalGateDelayMinutes": 13
      },
      "flightDurations": {
        "scheduledBlockMinutes": 75,
        "blockMinutes": 69
      },
      "airportResources": {
        "departureGate": "B9",
        "arrivalGate": "10A"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPX"
      }
    },
    {
      "flightId": "EM0931-20220701-CPH-LAX",
      "carrierFsCode": "EM",
      "flightNumber": "931",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "LAX",
      "departureDate": {
        "dateUtc": "2022-07-01T07:30:00.000Z",
        "dateLocal": "2022-07-01T09:30:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T18:45:00.000Z",
        "dateLocal": "2022-07-01T11:45:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T11:36:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T07:30:00.000Z",
          "dateLocal": "2022-07-01T09:30:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T07:30:00.000Z",
          "dateLocal": "2022-07-01T09:30:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T08:04:00.000Z",
          "dateLocal": "2022-07-01T10:04:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T08:17:00.000Z",
          "dateLocal": "2022-07-01T10:17:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T18:45:00.000Z",
          "dateLocal": "2022-07-01T11:45:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T18:45:00.000Z",
          "dateLocal": "2022-07-01T11:45:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T19:15:00.000Z",
          "dateLocal": "2022-07-01T12:15:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T18:36:00.000Z",
          "dateLocal": "2022-07-01T11:36:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T18:27:00.000Z",
          "dateLocal": "2022-07-01T11:27:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 34
      },
      "flightDurations": {
        "scheduledBlockMinutes": 675,
        "blockMinutes": 632
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "C37",
        "arrivalTerminal": "B"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "350",
        "actualEquipmentIataCode": "350",
        "tailNumber": "SERSD"
      }
    },
    {
      "flightId": "EM0777-20220701-CPH-ATH",
      "carrierFsCode": "EM",
      "flightNumber": "777",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ATH",
      "departureDate": {
        "dateUtc": "2022-07-01T08:15:00.000Z",
        "dateLocal": "2022-07-01T10:15:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T11:30:00.000Z",
        "dateLocal": "2022-07-01T14:30:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T15:12:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T08:15:00.000Z",
          "dateLocal": "2022-07-01T10:15:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T08:15:00.000Z",
          "dateLocal": "2022-07-01T10:15:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T08:55:00.000Z",
          "dateLocal": "2022-07-01T10:55:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T09:06:00.000Z",
          "dateLocal": "2022-07-01T11:06:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T11:30:00.000Z",
          "dateLocal": "2022-07-01T14:30:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T11:30:00.000Z",
          "dateLocal": "2022-07-01T14:30:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T11:58:00.000Z",
          "dateLocal": "2022-07-01T14:58:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T12:12:00.000Z",
          "dateLocal": "2022-07-01T15:12:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T12:01:00.000Z",
          "dateLocal": "2022-07-01T15:01:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 40,
        "arrivalGateDelayMinutes": 42
      },
      "flightDurations": {
        "scheduledBlockMinutes": 195,
        "blockMinutes": 197
      },
      "airportResources": {
        "departureGate": "D1"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKAU"
      }
    },
    {
      "flightId": "EM1207-20220701-CPH-AAL",
      "carrierFsCode": "EM",
      "flightNumber": "1207",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "AAL",
      "departureDate": {
        "dateUtc": "2022-07-01T08:30:00.000Z",
        "dateLocal": "2022-07-01T10:30:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T09:25:00.000Z",
        "dateLocal": "2022-07-01T11:25:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T11:19:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T08:30:00.000Z",
          "dateLocal": "2022-07-01T10:30:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T08:30:00.000Z",
          "dateLocal": "2022-07-01T10:30:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T08:32:00.000Z",
          "dateLocal": "2022-07-01T10:32:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T08:36:00.000Z",
          "dateLocal": "2022-07-01T10:36:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T09:25:00.000Z",
          "dateLocal": "2022-07-01T11:25:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T09:25:00.000Z",
          "dateLocal": "2022-07-01T11:25:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T09:15:00.000Z",
          "dateLocal": "2022-07-01T11:15:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T09:19:00.000Z",
          "dateLocal": "2022-07-01T11:19:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T09:15:00.000Z",
          "dateLocal": "2022-07-01T11:15:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 2
      },
      "flightDurations": {
        "scheduledBlockMinutes": 55,
        "blockMinutes": 47
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "E5"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATI"
      }
    },
    {
      "flightId": "EM1777-20220701-CPH-FAE",
      "carrierFsCode": "EM",
      "flightNumber": "1777",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "FAE",
      "departureDate": {
        "dateUtc": "2022-07-01T09:00:00.000Z",
        "dateLocal": "2022-07-01T11:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T11:15:00.000Z",
        "dateLocal": "2022-07-01T12:15:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T12:04:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T09:00:00.000Z",
          "dateLocal": "2022-07-01T11:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T09:00:00.000Z",
          "dateLocal": "2022-07-01T11:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T09:11:00.000Z",
          "dateLocal": "2022-07-01T11:11:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T09:18:00.000Z",
          "dateLocal": "2022-07-01T11:18:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T11:15:00.000Z",
          "dateLocal": "2022-07-01T12:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T11:15:00.000Z",
          "dateLocal": "2022-07-01T12:15:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T11:00:00.000Z",
          "dateLocal": "2022-07-01T12:00:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T11:04:00.000Z",
          "dateLocal": "2022-07-01T12:04:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T11:01:00.000Z",
          "dateLocal": "2022-07-01T12:01:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 11
      },
      "flightDurations": {
        "scheduledBlockMinutes": 135,
        "blockMinutes": 113
      },
      "airportResources": {
        "departureGate": "B7"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SEROU"
      }
    },
    {
      "flightId": "EM2613-20220701-CPH-GVA",
      "carrierFsCode": "EM",
      "flightNumber": "2613",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "GVA",
      "departureDate": {
        "dateUtc": "2022-07-01T09:00:00.000Z",
        "dateLocal": "2022-07-01T11:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T11:00:00.000Z",
        "dateLocal": "2022-07-01T13:00:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T13:41:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T09:00:00.000Z",
          "dateLocal": "2022-07-01T11:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T09:00:00.000Z",
          "dateLocal": "2022-07-01T11:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T09:35:00.000Z",
          "dateLocal": "2022-07-01T11:35:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T09:47:00.000Z",
          "dateLocal": "2022-07-01T11:47:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T11:00:00.000Z",
          "dateLocal": "2022-07-01T13:00:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T11:00:00.000Z",
          "dateLocal": "2022-07-01T13:00:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T11:28:00.000Z",
          "dateLocal": "2022-07-01T13:28:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T11:41:00.000Z",
          "dateLocal": "2022-07-01T13:41:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T11:37:00.000Z",
          "dateLocal": "2022-07-01T13:37:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 35,
        "arrivalGateDelayMinutes": 41
      },
      "flightDurations": {
        "scheduledBlockMinutes": 120,
        "blockMinutes": 126
      },
      "airportResources": {
        "departureGate": "D3"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPI"
      }
    },
    {
      "flightId": "EM1247-20220701-CPH-AAR",
      "carrierFsCode": "EM",
      "flightNumber": "1247",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "AAR",
      "departureDate": {
        "dateUtc": "2022-07-01T09:30:00.000Z",
        "dateLocal": "2022-07-01T11:30:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T10:10:00.000Z",
        "dateLocal": "2022-07-01T12:10:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T12:31:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T09:30:00.000Z",
          "dateLocal": "2022-07-01T11:30:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T09:30:00.000Z",
          "dateLocal": "2022-07-01T11:30:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T09:58:00.000Z",
          "dateLocal": "2022-07-01T11:58:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T10:02:00.000Z",
          "dateLocal": "2022-07-01T12:02:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T10:10:00.000Z",
          "dateLocal": "2022-07-01T12:10:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T10:10:00.000Z",
          "dateLocal": "2022-07-01T12:10:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T10:32:00.000Z",
          "dateLocal": "2022-07-01T12:32:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T10:31:00.000Z",
          "dateLocal": "2022-07-01T12:31:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T10:28:00.000Z",
          "dateLocal": "2022-07-01T12:28:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 28,
        "arrivalGateDelayMinutes": 21
      },
      "flightDurations": {
        "scheduledBlockMinutes": 40,
        "blockMinutes": 33
      },
      "airportResources": {
        "departureGate": "B5"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATD"
      }
    },
    {
      "flightId": "EM2864-20220701-CPH-BGO",
      "carrierFsCode": "EM",
      "flightNumber": "2864",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "BGO",
      "departureDate": {
        "dateUtc": "2022-07-01T09:45:00.000Z",
        "dateLocal": "2022-07-01T11:45:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T11:05:00.000Z",
        "dateLocal": "2022-07-01T13:05:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T13:00:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T09:45:00.000Z",
          "dateLocal": "2022-07-01T11:45:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T09:45:00.000Z",
          "dateLocal": "2022-07-01T11:45:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T09:48:00.000Z",
          "dateLocal": "2022-07-01T11:48:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T09:56:00.000Z",
          "dateLocal": "2022-07-01T11:56:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T11:05:00.000Z",
          "dateLocal": "2022-07-01T13:05:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T11:05:00.000Z",
          "dateLocal": "2022-07-01T13:05:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T10:54:00.000Z",
          "dateLocal": "2022-07-01T12:54:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T11:00:00.000Z",
          "dateLocal": "2022-07-01T13:00:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T10:58:00.000Z",
          "dateLocal": "2022-07-01T12:58:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 3
      },
      "flightDurations": {
        "scheduledBlockMinutes": 80,
        "blockMinutes": 72
      },
      "airportResources": {
        "departureGate": "E5"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPD"
      }
    },
    {
      "flightId": "EM1420-20220701-CPH-ARN",
      "carrierFsCode": "EM",
      "flightNumber": "1420",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ARN",
      "departureDate": {
        "dateUtc": "2022-07-01T09:45:00.000Z",
        "dateLocal": "2022-07-01T11:45:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T11:00:00.000Z",
        "dateLocal": "2022-07-01T13:00:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T13:45:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T09:45:00.000Z",
          "dateLocal": "2022-07-01T11:45:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T09:45:00.000Z",
          "dateLocal": "2022-07-01T11:45:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T10:37:00.000Z",
          "dateLocal": "2022-07-01T12:37:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T10:48:00.000Z",
          "dateLocal": "2022-07-01T12:48:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T11:00:00.000Z",
          "dateLocal": "2022-07-01T13:00:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T11:00:00.000Z",
          "dateLocal": "2022-07-01T13:00:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T11:37:00.000Z",
          "dateLocal": "2022-07-01T13:37:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T11:45:00.000Z",
          "dateLocal": "2022-07-01T13:45:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T11:40:00.000Z",
          "dateLocal": "2022-07-01T13:40:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 52,
        "arrivalGateDelayMinutes": 45
      },
      "flightDurations": {
        "scheduledBlockMinutes": 75,
        "blockMinutes": 68
      },
      "airportResources": {
        "departureGate": "D2",
        "arrivalGate": "3A"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKBK"
      }
    },
    {
      "flightId": "EM1458-20220701-CPH-OSL",
      "carrierFsCode": "EM",
      "flightNumber": "1458",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "OSL",
      "departureDate": {
        "dateUtc": "2022-07-01T09:45:00.000Z",
        "dateLocal": "2022-07-01T11:45:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T10:55:00.000Z",
        "dateLocal": "2022-07-01T12:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T14:40:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T09:45:00.000Z",
          "dateLocal": "2022-07-01T11:45:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T09:45:00.000Z",
          "dateLocal": "2022-07-01T11:45:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T11:41:00.000Z",
          "dateLocal": "2022-07-01T13:41:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T11:51:00.000Z",
          "dateLocal": "2022-07-01T13:51:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T10:55:00.000Z",
          "dateLocal": "2022-07-01T12:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T10:55:00.000Z",
          "dateLocal": "2022-07-01T12:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T12:44:00.000Z",
          "dateLocal": "2022-07-01T14:44:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T12:40:00.000Z",
          "dateLocal": "2022-07-01T14:40:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T12:36:00.000Z",
          "dateLocal": "2022-07-01T14:36:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 116,
        "arrivalGateDelayMinutes": 105
      },
      "flightDurations": {
        "scheduledBlockMinutes": 70,
        "blockMinutes": 59
      },
      "airportResources": {
        "departureGate": "A25"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SEROZ"
      }
    },
    {
      "flightId": "EM1868-20220701-CPH-SVG",
      "carrierFsCode": "EM",
      "flightNumber": "1868",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "SVG",
      "departureDate": {
        "dateUtc": "2022-07-01T09:55:00.000Z",
        "dateLocal": "2022-07-01T11:55:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T11:05:00.000Z",
        "dateLocal": "2022-07-01T13:05:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T13:05:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T09:55:00.000Z",
          "dateLocal": "2022-07-01T11:55:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T09:55:00.000Z",
          "dateLocal": "2022-07-01T11:55:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T10:05:00.000Z",
          "dateLocal": "2022-07-01T12:05:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T10:12:00.000Z",
          "dateLocal": "2022-07-01T12:12:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T11:05:00.000Z",
          "dateLocal": "2022-07-01T13:05:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T11:05:00.000Z",
          "dateLocal": "2022-07-01T13:05:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T11:04:00.000Z",
          "dateLocal": "2022-07-01T13:04:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T11:05:00.000Z",
          "dateLocal": "2022-07-01T13:05:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T11:02:00.000Z",
          "dateLocal": "2022-07-01T13:02:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 10
      },
      "flightDurations": {
        "scheduledBlockMinutes": 70,
        "blockMinutes": 60
      },
      "airportResources": {
        "departureGate": "B19"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGEA"
      }
    },
    {
      "flightId": "EM2746-20220701-CPH-PLQ",
      "carrierFsCode": "EM",
      "flightNumber": "2746",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "PLQ",
      "departureDate": {
        "dateUtc": "2022-07-01T10:05:00.000Z",
        "dateLocal": "2022-07-01T12:05:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T11:10:00.000Z",
        "dateLocal": "2022-07-01T14:10:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T14:16:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T10:05:00.000Z",
          "dateLocal": "2022-07-01T12:05:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T10:05:00.000Z",
          "dateLocal": "2022-07-01T12:05:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T10:09:00.000Z",
          "dateLocal": "2022-07-01T12:09:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T10:18:00.000Z",
          "dateLocal": "2022-07-01T12:18:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T11:10:00.000Z",
          "dateLocal": "2022-07-01T14:10:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T11:10:00.000Z",
          "dateLocal": "2022-07-01T14:10:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T11:13:00.000Z",
          "dateLocal": "2022-07-01T14:13:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T11:16:00.000Z",
          "dateLocal": "2022-07-01T14:16:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T11:11:00.000Z",
          "dateLocal": "2022-07-01T14:11:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 4,
        "arrivalGateDelayMinutes": 6
      },
      "flightDurations": {
        "scheduledBlockMinutes": 65,
        "blockMinutes": 67
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "A6"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPT"
      }
    },
    {
      "flightId": "EM0935-20220701-CPH-SFO",
      "carrierFsCode": "EM",
      "flightNumber": "935",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "SFO",
      "departureDate": {
        "dateUtc": "2022-07-01T10:15:00.000Z",
        "dateLocal": "2022-07-01T12:15:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T21:20:00.000Z",
        "dateLocal": "2022-07-01T14:20:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T13:54:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T10:15:00.000Z",
          "dateLocal": "2022-07-01T12:15:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T10:15:00.000Z",
          "dateLocal": "2022-07-01T12:15:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T10:38:00.000Z",
          "dateLocal": "2022-07-01T12:38:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T10:57:00.000Z",
          "dateLocal": "2022-07-01T12:57:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T21:20:00.000Z",
          "dateLocal": "2022-07-01T14:20:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T21:20:00.000Z",
          "dateLocal": "2022-07-01T14:20:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T21:35:00.000Z",
          "dateLocal": "2022-07-01T14:35:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T20:54:00.000Z",
          "dateLocal": "2022-07-01T13:54:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T20:47:00.000Z",
          "dateLocal": "2022-07-01T13:47:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 23
      },
      "flightDurations": {
        "scheduledBlockMinutes": 665,
        "blockMinutes": 616
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "C33",
        "arrivalTerminal": "I"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "350",
        "actualEquipmentIataCode": "350",
        "tailNumber": "SERSC"
      }
    },
    {
      "flightId": "EM0925-20220701-CPH-IAD",
      "carrierFsCode": "EM",
      "flightNumber": "925",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "IAD",
      "departureDate": {
        "dateUtc": "2022-07-01T10:20:00.000Z",
        "dateLocal": "2022-07-01T12:20:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T19:00:00.000Z",
        "dateLocal": "2022-07-01T15:00:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T15:36:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T10:20:00.000Z",
          "dateLocal": "2022-07-01T12:20:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T10:20:00.000Z",
          "dateLocal": "2022-07-01T12:20:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T10:40:00.000Z",
          "dateLocal": "2022-07-01T12:40:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T10:53:00.000Z",
          "dateLocal": "2022-07-01T12:53:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T19:00:00.000Z",
          "dateLocal": "2022-07-01T15:00:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T19:00:00.000Z",
          "dateLocal": "2022-07-01T15:00:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T19:28:00.000Z",
          "dateLocal": "2022-07-01T15:28:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T19:36:00.000Z",
          "dateLocal": "2022-07-01T15:36:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T19:28:00.000Z",
          "dateLocal": "2022-07-01T15:28:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 20,
        "arrivalGateDelayMinutes": 36
      },
      "flightDurations": {
        "scheduledBlockMinutes": 520,
        "blockMinutes": 536
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "E135"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "330",
        "actualEquipmentIataCode": "330",
        "tailNumber": "SEREH"
      }
    },
    {
      "flightId": "EM2795-20220701-CPH-NCE",
      "carrierFsCode": "EM",
      "flightNumber": "2795",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "NCE",
      "departureDate": {
        "dateUtc": "2022-07-01T10:30:00.000Z",
        "dateLocal": "2022-07-01T12:30:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T12:55:00.000Z",
        "dateLocal": "2022-07-01T14:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T15:02:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T10:30:00.000Z",
          "dateLocal": "2022-07-01T12:30:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T10:30:00.000Z",
          "dateLocal": "2022-07-01T12:30:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T10:43:00.000Z",
          "dateLocal": "2022-07-01T12:43:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T10:52:00.000Z",
          "dateLocal": "2022-07-01T12:52:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T12:55:00.000Z",
          "dateLocal": "2022-07-01T14:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T12:55:00.000Z",
          "dateLocal": "2022-07-01T14:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T12:56:00.000Z",
          "dateLocal": "2022-07-01T14:56:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T13:02:00.000Z",
          "dateLocal": "2022-07-01T15:02:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T12:59:00.000Z",
          "dateLocal": "2022-07-01T14:59:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 13,
        "arrivalGateDelayMinutes": 7
      },
      "flightDurations": {
        "scheduledBlockMinutes": 145,
        "blockMinutes": 139
      },
      "airportResources": {
        "departureGate": "B4"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKAL"
      }
    },
    {
      "flightId": "EM1742-20220701-CPH-VNO",
      "carrierFsCode": "EM",
      "flightNumber": "1742",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "VNO",
      "departureDate": {
        "dateUtc": "2022-07-01T10:30:00.000Z",
        "dateLocal": "2022-07-01T12:30:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T12:00:00.000Z",
        "dateLocal": "2022-07-01T15:00:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T15:31:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T10:30:00.000Z",
          "dateLocal": "2022-07-01T12:30:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T10:30:00.000Z",
          "dateLocal": "2022-07-01T12:30:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T11:06:00.000Z",
          "dateLocal": "2022-07-01T13:06:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T11:13:00.000Z",
          "dateLocal": "2022-07-01T13:13:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T12:00:00.000Z",
          "dateLocal": "2022-07-01T15:00:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T12:00:00.000Z",
          "dateLocal": "2022-07-01T15:00:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T12:28:00.000Z",
          "dateLocal": "2022-07-01T15:28:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T12:31:00.000Z",
          "dateLocal": "2022-07-01T15:31:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T12:24:00.000Z",
          "dateLocal": "2022-07-01T15:24:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 36,
        "arrivalGateDelayMinutes": 31
      },
      "flightDurations": {
        "scheduledBlockMinutes": 90,
        "blockMinutes": 85
      },
      "airportResources": {
        "departureGate": "B15"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPS"
      }
    },
    {
      "flightId": "EM0927-20220701-CPH-BOS",
      "carrierFsCode": "EM",
      "flightNumber": "927",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "BOS",
      "departureDate": {
        "dateUtc": "2022-07-01T10:30:00.000Z",
        "dateLocal": "2022-07-01T12:30:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T18:55:00.000Z",
        "dateLocal": "2022-07-01T14:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T14:30:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T10:30:00.000Z",
          "dateLocal": "2022-07-01T12:30:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T10:30:00.000Z",
          "dateLocal": "2022-07-01T12:30:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T10:30:00.000Z",
          "dateLocal": "2022-07-01T12:30:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T10:41:00.000Z",
          "dateLocal": "2022-07-01T12:41:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T18:55:00.000Z",
          "dateLocal": "2022-07-01T14:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T18:55:00.000Z",
          "dateLocal": "2022-07-01T14:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T18:30:00.000Z",
          "dateLocal": "2022-07-01T14:30:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T18:30:00.000Z",
          "dateLocal": "2022-07-01T14:30:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T18:21:00.000Z",
          "dateLocal": "2022-07-01T14:21:00.000"
        }
      },
      "delays": {},
      "flightDurations": {
        "scheduledBlockMinutes": 505,
        "blockMinutes": 480
      },
      "airportResources": {
        "departureGate": "C32"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SEDMR"
      }
    },
    {
      "flightId": "EM0909-20220701-CPH-EWR",
      "carrierFsCode": "EM",
      "flightNumber": "909",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "EWR",
      "departureDate": {
        "dateUtc": "2022-07-01T10:35:00.000Z",
        "dateLocal": "2022-07-01T12:35:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T18:55:00.000Z",
        "dateLocal": "2022-07-01T14:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T14:59:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T10:35:00.000Z",
          "dateLocal": "2022-07-01T12:35:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T10:35:00.000Z",
          "dateLocal": "2022-07-01T12:35:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T11:04:00.000Z",
          "dateLocal": "2022-07-01T13:04:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T11:17:00.000Z",
          "dateLocal": "2022-07-01T13:17:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T18:55:00.000Z",
          "dateLocal": "2022-07-01T14:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T18:55:00.000Z",
          "dateLocal": "2022-07-01T14:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T18:42:00.000Z",
          "dateLocal": "2022-07-01T14:42:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T18:59:00.000Z",
          "dateLocal": "2022-07-01T14:59:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T18:53:00.000Z",
          "dateLocal": "2022-07-01T14:53:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 29,
        "arrivalGateDelayMinutes": 4
      },
      "flightDurations": {
        "scheduledBlockMinutes": 500,
        "blockMinutes": 475
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "E129",
        "arrivalTerminal": "B"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "350",
        "actualEquipmentIataCode": "350",
        "tailNumber": "SERSA"
      }
    },
    {
      "flightId": "EM2691-20220701-CPH-VCE",
      "carrierFsCode": "EM",
      "flightNumber": "2691",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "VCE",
      "departureDate": {
        "dateUtc": "2022-07-01T10:40:00.000Z",
        "dateLocal": "2022-07-01T12:40:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T12:45:00.000Z",
        "dateLocal": "2022-07-01T14:45:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T15:14:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T10:40:00.000Z",
          "dateLocal": "2022-07-01T12:40:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T10:40:00.000Z",
          "dateLocal": "2022-07-01T12:40:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T11:12:00.000Z",
          "dateLocal": "2022-07-01T13:12:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T11:21:00.000Z",
          "dateLocal": "2022-07-01T13:21:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T12:45:00.000Z",
          "dateLocal": "2022-07-01T14:45:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T12:45:00.000Z",
          "dateLocal": "2022-07-01T14:45:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T13:12:00.000Z",
          "dateLocal": "2022-07-01T15:12:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T13:14:00.000Z",
          "dateLocal": "2022-07-01T15:14:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T13:10:00.000Z",
          "dateLocal": "2022-07-01T15:10:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 32,
        "arrivalGateDelayMinutes": 29
      },
      "flightDurations": {
        "scheduledBlockMinutes": 125,
        "blockMinutes": 122
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "B8"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPX"
      }
    },
    {
      "flightId": "EM2882-20220701-CPH-TRD",
      "carrierFsCode": "EM",
      "flightNumber": "2882",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "TRD",
      "departureDate": {
        "dateUtc": "2022-07-01T11:35:00.000Z",
        "dateLocal": "2022-07-01T13:35:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T13:10:00.000Z",
        "dateLocal": "2022-07-01T15:10:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T15:16:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T11:35:00.000Z",
          "dateLocal": "2022-07-01T13:35:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T11:35:00.000Z",
          "dateLocal": "2022-07-01T13:35:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T11:50:00.000Z",
          "dateLocal": "2022-07-01T13:50:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T12:01:00.000Z",
          "dateLocal": "2022-07-01T14:01:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T13:10:00.000Z",
          "dateLocal": "2022-07-01T15:10:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T13:10:00.000Z",
          "dateLocal": "2022-07-01T15:10:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T13:13:00.000Z",
          "dateLocal": "2022-07-01T15:13:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T13:16:00.000Z",
          "dateLocal": "2022-07-01T15:16:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T13:14:00.000Z",
          "dateLocal": "2022-07-01T15:14:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 15,
        "arrivalGateDelayMinutes": 6
      },
      "flightDurations": {
        "scheduledBlockMinutes": 95,
        "blockMinutes": 86
      },
      "airportResources": {
        "departureGate": "E5"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGEC"
      }
    },
    {
      "flightId": "EM1213-20220701-CPH-AAL",
      "carrierFsCode": "EM",
      "flightNumber": "1213",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "AAL",
      "departureDate": {
        "dateUtc": "2022-07-01T11:35:00.000Z",
        "dateLocal": "2022-07-01T13:35:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T12:30:00.000Z",
        "dateLocal": "2022-07-01T14:30:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T15:23:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T11:35:00.000Z",
          "dateLocal": "2022-07-01T13:35:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T11:35:00.000Z",
          "dateLocal": "2022-07-01T13:35:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T12:34:00.000Z",
          "dateLocal": "2022-07-01T14:34:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T12:41:00.000Z",
          "dateLocal": "2022-07-01T14:41:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T12:30:00.000Z",
          "dateLocal": "2022-07-01T14:30:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T12:30:00.000Z",
          "dateLocal": "2022-07-01T14:30:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T13:19:00.000Z",
          "dateLocal": "2022-07-01T15:19:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T13:23:00.000Z",
          "dateLocal": "2022-07-01T15:23:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T13:18:00.000Z",
          "dateLocal": "2022-07-01T15:18:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 59,
        "arrivalGateDelayMinutes": 53
      },
      "flightDurations": {
        "scheduledBlockMinutes": 55,
        "blockMinutes": 49
      },
      "airportResources": {
        "departureGate": "B5"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATG"
      }
    },
    {
      "flightId": "EM1872-20220701-CPH-SVG",
      "carrierFsCode": "EM",
      "flightNumber": "1872",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "SVG",
      "departureDate": {
        "dateUtc": "2022-07-01T11:35:00.000Z",
        "dateLocal": "2022-07-01T13:35:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T12:45:00.000Z",
        "dateLocal": "2022-07-01T14:45:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T16:01:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T11:35:00.000Z",
          "dateLocal": "2022-07-01T13:35:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T11:35:00.000Z",
          "dateLocal": "2022-07-01T13:35:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T13:02:00.000Z",
          "dateLocal": "2022-07-01T15:02:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T13:10:00.000Z",
          "dateLocal": "2022-07-01T15:10:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T12:45:00.000Z",
          "dateLocal": "2022-07-01T14:45:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T12:45:00.000Z",
          "dateLocal": "2022-07-01T14:45:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T14:01:00.000Z",
          "dateLocal": "2022-07-01T16:01:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T14:01:00.000Z",
          "dateLocal": "2022-07-01T16:01:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T13:58:00.000Z",
          "dateLocal": "2022-07-01T15:58:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 87,
        "arrivalGateDelayMinutes": 76
      },
      "flightDurations": {
        "scheduledBlockMinutes": 70,
        "blockMinutes": 59
      },
      "airportResources": {
        "departureGate": "A20"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGED"
      }
    },
    {
      "flightId": "EM2961-20220701-CPH-FLR",
      "carrierFsCode": "EM",
      "flightNumber": "2961",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "FLR",
      "departureDate": {
        "dateUtc": "2022-07-01T11:40:00.000Z",
        "dateLocal": "2022-07-01T13:40:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T14:00:00.000Z",
        "dateLocal": "2022-07-01T16:00:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T16:26:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T11:40:00.000Z",
          "dateLocal": "2022-07-01T13:40:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T11:40:00.000Z",
          "dateLocal": "2022-07-01T13:40:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T11:47:00.000Z",
          "dateLocal": "2022-07-01T13:47:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T12:21:00.000Z",
          "dateLocal": "2022-07-01T14:21:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T14:00:00.000Z",
          "dateLocal": "2022-07-01T16:00:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T14:00:00.000Z",
          "dateLocal": "2022-07-01T16:00:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T14:25:00.000Z",
          "dateLocal": "2022-07-01T16:25:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T14:26:00.000Z",
          "dateLocal": "2022-07-01T16:26:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T14:21:00.000Z",
          "dateLocal": "2022-07-01T16:21:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 7,
        "arrivalGateDelayMinutes": 26
      },
      "flightDurations": {
        "scheduledBlockMinutes": 140,
        "blockMinutes": 159
      },
      "airportResources": {
        "departureGate": "B19"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SEROX"
      }
    },
    {
      "flightId": "EM2986-20220701-CPH-KRS",
      "carrierFsCode": "EM",
      "flightNumber": "2986",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "KRS",
      "departureDate": {
        "dateUtc": "2022-07-01T12:05:00.000Z",
        "dateLocal": "2022-07-01T14:05:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T13:25:00.000Z",
        "dateLocal": "2022-07-01T15:25:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T15:31:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T12:05:00.000Z",
          "dateLocal": "2022-07-01T14:05:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T12:05:00.000Z",
          "dateLocal": "2022-07-01T14:05:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T12:25:00.000Z",
          "dateLocal": "2022-07-01T14:25:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T12:29:00.000Z",
          "dateLocal": "2022-07-01T14:29:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T13:25:00.000Z",
          "dateLocal": "2022-07-01T15:25:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T13:25:00.000Z",
          "dateLocal": "2022-07-01T15:25:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T13:27:00.000Z",
          "dateLocal": "2022-07-01T15:27:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T13:31:00.000Z",
          "dateLocal": "2022-07-01T15:31:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T13:27:00.000Z",
          "dateLocal": "2022-07-01T15:27:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 20,
        "arrivalGateDelayMinutes": 6
      },
      "flightDurations": {
        "scheduledBlockMinutes": 80,
        "blockMinutes": 66
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "A28"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATD"
      }
    },
    {
      "flightId": "EM2868-20220701-CPH-BGO",
      "carrierFsCode": "EM",
      "flightNumber": "2868",
      "operatedBy": "EM Link",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "BGO",
      "departureDate": {
        "dateUtc": "2022-07-01T12:05:00.000Z",
        "dateLocal": "2022-07-01T14:05:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T13:25:00.000Z",
        "dateLocal": "2022-07-01T15:25:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T16:42:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T12:05:00.000Z",
          "dateLocal": "2022-07-01T14:05:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T12:05:00.000Z",
          "dateLocal": "2022-07-01T14:05:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T13:25:00.000Z",
          "dateLocal": "2022-07-01T15:25:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T13:37:00.000Z",
          "dateLocal": "2022-07-01T15:37:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T13:25:00.000Z",
          "dateLocal": "2022-07-01T15:25:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T13:25:00.000Z",
          "dateLocal": "2022-07-01T15:25:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T14:40:00.000Z",
          "dateLocal": "2022-07-01T16:40:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T14:42:00.000Z",
          "dateLocal": "2022-07-01T16:42:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T14:36:00.000Z",
          "dateLocal": "2022-07-01T16:36:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 80,
        "arrivalGateDelayMinutes": 77
      },
      "flightDurations": {
        "scheduledBlockMinutes": 80,
        "blockMinutes": 77
      },
      "airportResources": {
        "departureGate": "B8"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "EMJ",
        "actualEquipmentIataCode": "EMJ",
        "tailNumber": "SEREM"
      }
    },
    {
      "flightId": "EM0649-20220701-CPH-HAM",
      "carrierFsCode": "EM",
      "flightNumber": "649",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "HAM",
      "departureDate": {
        "dateUtc": "2022-07-01T12:05:00.000Z",
        "dateLocal": "2022-07-01T14:05:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T13:10:00.000Z",
        "dateLocal": "2022-07-01T15:10:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T15:26:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T12:05:00.000Z",
          "dateLocal": "2022-07-01T14:05:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T12:05:00.000Z",
          "dateLocal": "2022-07-01T14:05:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T12:26:00.000Z",
          "dateLocal": "2022-07-01T14:26:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T12:34:00.000Z",
          "dateLocal": "2022-07-01T14:34:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T13:10:00.000Z",
          "dateLocal": "2022-07-01T15:10:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T13:10:00.000Z",
          "dateLocal": "2022-07-01T15:10:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T13:43:00.000Z",
          "dateLocal": "2022-07-01T15:43:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T13:26:00.000Z",
          "dateLocal": "2022-07-01T15:26:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T13:19:00.000Z",
          "dateLocal": "2022-07-01T15:19:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 21,
        "arrivalGateDelayMinutes": 16
      },
      "flightDurations": {
        "scheduledBlockMinutes": 65,
        "blockMinutes": 60
      },
      "airportResources": {
        "departureGate": "E4"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATI"
      }
    },
    {
      "flightId": "EM0759-20220701-CPH-GDN",
      "carrierFsCode": "EM",
      "flightNumber": "759",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "GDN",
      "departureDate": {
        "dateUtc": "2022-07-01T12:05:00.000Z",
        "dateLocal": "2022-07-01T14:05:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T13:00:00.000Z",
        "dateLocal": "2022-07-01T15:00:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T15:09:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T12:05:00.000Z",
          "dateLocal": "2022-07-01T14:05:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T12:05:00.000Z",
          "dateLocal": "2022-07-01T14:05:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T12:11:00.000Z",
          "dateLocal": "2022-07-01T14:11:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T12:25:00.000Z",
          "dateLocal": "2022-07-01T14:25:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T13:00:00.000Z",
          "dateLocal": "2022-07-01T15:00:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T13:00:00.000Z",
          "dateLocal": "2022-07-01T15:00:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T13:10:00.000Z",
          "dateLocal": "2022-07-01T15:10:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T13:09:00.000Z",
          "dateLocal": "2022-07-01T15:09:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T13:05:00.000Z",
          "dateLocal": "2022-07-01T15:05:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 6,
        "arrivalGateDelayMinutes": 9
      },
      "flightDurations": {
        "scheduledBlockMinutes": 55,
        "blockMinutes": 58
      },
      "airportResources": {
        "departureGate": "E3"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGEF"
      }
    },
    {
      "flightId": "EM0505-20220701-CPH-EMR",
      "carrierFsCode": "EM",
      "flightNumber": "505",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "EMR",
      "departureDate": {
        "dateUtc": "2022-07-01T13:00:00.000Z",
        "dateLocal": "2022-07-01T15:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T15:00:00.000Z",
        "dateLocal": "2022-07-01T16:00:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T17:15:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T13:00:00.000Z",
          "dateLocal": "2022-07-01T15:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T13:00:00.000Z",
          "dateLocal": "2022-07-01T15:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T14:24:00.000Z",
          "dateLocal": "2022-07-01T16:24:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T14:40:00.000Z",
          "dateLocal": "2022-07-01T16:40:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T15:00:00.000Z",
          "dateLocal": "2022-07-01T16:00:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T15:00:00.000Z",
          "dateLocal": "2022-07-01T16:00:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T16:10:00.000Z",
          "dateLocal": "2022-07-01T17:10:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T16:15:00.000Z",
          "dateLocal": "2022-07-01T17:15:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T16:08:00.000Z",
          "dateLocal": "2022-07-01T17:08:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 84,
        "arrivalGateDelayMinutes": 75
      },
      "flightDurations": {
        "scheduledBlockMinutes": 120,
        "blockMinutes": 111
      },
      "airportResources": {
        "departureGate": "D103"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "EISIE"
      }
    },
    {
      "flightId": "EM1593-20220701-CPH-BRU",
      "carrierFsCode": "EM",
      "flightNumber": "1593",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "BRU",
      "departureDate": {
        "dateUtc": "2022-07-01T13:20:00.000Z",
        "dateLocal": "2022-07-01T15:20:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T14:50:00.000Z",
        "dateLocal": "2022-07-01T16:50:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T16:51:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T13:20:00.000Z",
          "dateLocal": "2022-07-01T15:20:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T13:20:00.000Z",
          "dateLocal": "2022-07-01T15:20:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T13:32:00.000Z",
          "dateLocal": "2022-07-01T15:32:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T13:40:00.000Z",
          "dateLocal": "2022-07-01T15:40:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T14:50:00.000Z",
          "dateLocal": "2022-07-01T16:50:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T14:50:00.000Z",
          "dateLocal": "2022-07-01T16:50:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T14:48:00.000Z",
          "dateLocal": "2022-07-01T16:48:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T14:51:00.000Z",
          "dateLocal": "2022-07-01T16:51:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T14:46:00.000Z",
          "dateLocal": "2022-07-01T16:46:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 12,
        "arrivalGateDelayMinutes": 1
      },
      "flightDurations": {
        "scheduledBlockMinutes": 90,
        "blockMinutes": 79
      },
      "airportResources": {
        "departureGate": "B15"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGEA"
      }
    },
    {
      "flightId": "EM1460-20220701-CPH-OSL",
      "carrierFsCode": "EM",
      "flightNumber": "1460",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "OSL",
      "departureDate": {
        "dateUtc": "2022-07-01T13:25:00.000Z",
        "dateLocal": "2022-07-01T15:25:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T14:35:00.000Z",
        "dateLocal": "2022-07-01T16:35:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T18:56:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T13:25:00.000Z",
          "dateLocal": "2022-07-01T15:25:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T13:25:00.000Z",
          "dateLocal": "2022-07-01T15:25:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T15:46:00.000Z",
          "dateLocal": "2022-07-01T17:46:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T15:57:00.000Z",
          "dateLocal": "2022-07-01T17:57:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T14:35:00.000Z",
          "dateLocal": "2022-07-01T16:35:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T14:35:00.000Z",
          "dateLocal": "2022-07-01T16:35:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T16:49:00.000Z",
          "dateLocal": "2022-07-01T18:49:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T16:56:00.000Z",
          "dateLocal": "2022-07-01T18:56:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T16:49:00.000Z",
          "dateLocal": "2022-07-01T18:49:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 141,
        "arrivalGateDelayMinutes": 141
      },
      "flightDurations": {
        "scheduledBlockMinutes": 70,
        "blockMinutes": 70
      },
      "airportResources": {
        "departureGate": "B4"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SEROZ"
      }
    },
    {
      "flightId": "EM1424-20220701-CPH-ARN",
      "carrierFsCode": "EM",
      "flightNumber": "1424",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ARN",
      "departureDate": {
        "dateUtc": "2022-07-01T13:30:00.000Z",
        "dateLocal": "2022-07-01T15:30:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T14:45:00.000Z",
        "dateLocal": "2022-07-01T16:45:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T17:36:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T13:30:00.000Z",
          "dateLocal": "2022-07-01T15:30:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T13:30:00.000Z",
          "dateLocal": "2022-07-01T15:30:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T14:26:00.000Z",
          "dateLocal": "2022-07-01T16:26:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T14:37:00.000Z",
          "dateLocal": "2022-07-01T16:37:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T14:45:00.000Z",
          "dateLocal": "2022-07-01T16:45:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T14:45:00.000Z",
          "dateLocal": "2022-07-01T16:45:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T15:35:00.000Z",
          "dateLocal": "2022-07-01T17:35:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T15:36:00.000Z",
          "dateLocal": "2022-07-01T17:36:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T15:32:00.000Z",
          "dateLocal": "2022-07-01T17:32:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 56,
        "arrivalGateDelayMinutes": 51
      },
      "flightDurations": {
        "scheduledBlockMinutes": 75,
        "blockMinutes": 70
      },
      "airportResources": {
        "departureGate": "B7",
        "arrivalGate": "7"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKBK"
      }
    },
    {
      "flightId": "EM0587-20220701-CPH-AGP",
      "carrierFsCode": "EM",
      "flightNumber": "587",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "AGP",
      "departureDate": {
        "dateUtc": "2022-07-01T13:30:00.000Z",
        "dateLocal": "2022-07-01T15:30:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T17:20:00.000Z",
        "dateLocal": "2022-07-01T19:20:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T19:39:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T13:30:00.000Z",
          "dateLocal": "2022-07-01T15:30:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T13:30:00.000Z",
          "dateLocal": "2022-07-01T15:30:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T13:37:00.000Z",
          "dateLocal": "2022-07-01T15:37:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T14:11:00.000Z",
          "dateLocal": "2022-07-01T16:11:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T17:20:00.000Z",
          "dateLocal": "2022-07-01T19:20:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T17:20:00.000Z",
          "dateLocal": "2022-07-01T19:20:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T17:30:00.000Z",
          "dateLocal": "2022-07-01T19:30:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T17:39:00.000Z",
          "dateLocal": "2022-07-01T19:39:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T17:30:00.000Z",
          "dateLocal": "2022-07-01T19:30:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 7,
        "arrivalGateDelayMinutes": 19
      },
      "flightDurations": {
        "scheduledBlockMinutes": 230,
        "blockMinutes": 242
      },
      "airportResources": {
        "departureGate": "B9"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKAW"
      }
    },
    {
      "flightId": "EM2673-20220701-CPH-TIV",
      "carrierFsCode": "EM",
      "flightNumber": "2673",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "TIV",
      "departureDate": {
        "dateUtc": "2022-07-01T13:35:00.000Z",
        "dateLocal": "2022-07-01T15:35:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T16:15:00.000Z",
        "dateLocal": "2022-07-01T18:15:00.000"
      },
      "status": "S",
      "statusDescription": "DELAYED",
      "statusInfo": {
        "status": "Delayed",
        "indicator": "#000099",
        "displayStatus": "Departing",
        "displayTime": "2022-07-01T18:10:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T13:35:00.000Z",
          "dateLocal": "2022-07-01T15:35:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T13:35:00.000Z",
          "dateLocal": "2022-07-01T15:35:00.000"
        },
        "estimatedGateDeparture": {
          "dateUtc": "2022-07-01T16:10:00.000Z",
          "dateLocal": "2022-07-01T18:10:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T16:15:00.000Z",
          "dateLocal": "2022-07-01T18:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T16:15:00.000Z",
          "dateLocal": "2022-07-01T18:15:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 155
      },
      "flightDurations": {
        "scheduledBlockMinutes": 160
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "D104"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SEDOY"
      }
    },
    {
      "flightId": "EM2673-20220701-CPH-DBV",
      "carrierFsCode": "EM",
      "flightNumber": "2673",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "DBV",
      "departureDate": {
        "dateUtc": "2022-07-01T13:35:00.000Z",
        "dateLocal": "2022-07-01T15:35:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T15:55:00.000Z",
        "dateLocal": "2022-07-01T17:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T21:02:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T13:35:00.000Z",
          "dateLocal": "2022-07-01T15:35:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T13:35:00.000Z",
          "dateLocal": "2022-07-01T15:35:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T16:37:00.000Z",
          "dateLocal": "2022-07-01T18:37:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T16:52:00.000Z",
          "dateLocal": "2022-07-01T18:52:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T15:55:00.000Z",
          "dateLocal": "2022-07-01T17:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T15:55:00.000Z",
          "dateLocal": "2022-07-01T17:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T18:58:00.000Z",
          "dateLocal": "2022-07-01T20:58:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T19:02:00.000Z",
          "dateLocal": "2022-07-01T21:02:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T18:59:00.000Z",
          "dateLocal": "2022-07-01T20:59:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 182,
        "arrivalGateDelayMinutes": 187
      },
      "flightDurations": {
        "scheduledBlockMinutes": 140,
        "blockMinutes": 145
      },
      "airportResources": {
        "departureGate": "D104"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SEDOY"
      }
    },
    {
      "flightId": "EM0943-20220701-CPH-ORD",
      "carrierFsCode": "EM",
      "flightNumber": "943",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ORD",
      "departureDate": {
        "dateUtc": "2022-07-01T13:40:00.000Z",
        "dateLocal": "2022-07-01T15:40:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T22:45:00.000Z",
        "dateLocal": "2022-07-01T17:45:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T18:23:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T13:40:00.000Z",
          "dateLocal": "2022-07-01T15:40:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T13:40:00.000Z",
          "dateLocal": "2022-07-01T15:40:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T14:09:00.000Z",
          "dateLocal": "2022-07-01T16:09:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T14:24:00.000Z",
          "dateLocal": "2022-07-01T16:24:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T22:45:00.000Z",
          "dateLocal": "2022-07-01T17:45:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T22:45:00.000Z",
          "dateLocal": "2022-07-01T17:45:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T22:42:00.000Z",
          "dateLocal": "2022-07-01T17:42:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T23:23:00.000Z",
          "dateLocal": "2022-07-01T18:23:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T22:42:00.000Z",
          "dateLocal": "2022-07-01T17:42:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 29,
        "arrivalGateDelayMinutes": 38
      },
      "flightDurations": {
        "scheduledBlockMinutes": 545,
        "blockMinutes": 554
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "E135",
        "arrivalTerminal": "5"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "330",
        "actualEquipmentIataCode": "330",
        "tailNumber": "LNRKR"
      }
    },
    {
      "flightId": "EM2517-20220701-CPH-BRI",
      "carrierFsCode": "EM",
      "flightNumber": "2517",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "BRI",
      "departureDate": {
        "dateUtc": "2022-07-01T13:40:00.000Z",
        "dateLocal": "2022-07-01T15:40:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T16:25:00.000Z",
        "dateLocal": "2022-07-01T18:25:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T21:11:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T13:40:00.000Z",
          "dateLocal": "2022-07-01T15:40:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T13:40:00.000Z",
          "dateLocal": "2022-07-01T15:40:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T16:14:00.000Z",
          "dateLocal": "2022-07-01T18:14:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T16:50:00.000Z",
          "dateLocal": "2022-07-01T18:50:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T16:25:00.000Z",
          "dateLocal": "2022-07-01T18:25:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T16:25:00.000Z",
          "dateLocal": "2022-07-01T18:25:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T19:16:00.000Z",
          "dateLocal": "2022-07-01T21:16:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T19:11:00.000Z",
          "dateLocal": "2022-07-01T21:11:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T19:06:00.000Z",
          "dateLocal": "2022-07-01T21:06:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 154,
        "arrivalGateDelayMinutes": 166
      },
      "flightDurations": {
        "scheduledBlockMinutes": 165,
        "blockMinutes": 177
      },
      "airportResources": {
        "departureGate": "B6"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SEROG"
      }
    },
    {
      "flightId": "EM2787-20220701-CPH-SPU",
      "carrierFsCode": "EM",
      "flightNumber": "2787",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "SPU",
      "departureDate": {
        "dateUtc": "2022-07-01T13:40:00.000Z",
        "dateLocal": "2022-07-01T15:40:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T15:55:00.000Z",
        "dateLocal": "2022-07-01T17:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T20:01:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T13:40:00.000Z",
          "dateLocal": "2022-07-01T15:40:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T13:40:00.000Z",
          "dateLocal": "2022-07-01T15:40:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T15:43:00.000Z",
          "dateLocal": "2022-07-01T17:43:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T15:56:00.000Z",
          "dateLocal": "2022-07-01T17:56:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T15:55:00.000Z",
          "dateLocal": "2022-07-01T17:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T15:55:00.000Z",
          "dateLocal": "2022-07-01T17:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T17:58:00.000Z",
          "dateLocal": "2022-07-01T19:58:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T18:01:00.000Z",
          "dateLocal": "2022-07-01T20:01:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T17:58:00.000Z",
          "dateLocal": "2022-07-01T19:58:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 123,
        "arrivalGateDelayMinutes": 126
      },
      "flightDurations": {
        "scheduledBlockMinutes": 135,
        "blockMinutes": 138
      },
      "airportResources": {
        "departureGate": "C34"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKAN"
      }
    },
    {
      "flightId": "EM2813-20220701-CPH-ALC",
      "carrierFsCode": "EM",
      "flightNumber": "2813",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ALC",
      "departureDate": {
        "dateUtc": "2022-07-01T13:55:00.000Z",
        "dateLocal": "2022-07-01T15:55:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T17:15:00.000Z",
        "dateLocal": "2022-07-01T19:15:00.000"
      },
      "status": "C",
      "statusDescription": "CANCELLED",
      "statusInfo": {
        "status": "Cancelled",
        "indicator": "red",
        "displayStatus": "Cancelled",
        "displayTime": null
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T13:55:00.000Z",
          "dateLocal": "2022-07-01T15:55:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T13:55:00.000Z",
          "dateLocal": "2022-07-01T15:55:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T17:15:00.000Z",
          "dateLocal": "2022-07-01T19:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T17:15:00.000Z",
          "dateLocal": "2022-07-01T19:15:00.000"
        }
      },
      "delays": {},
      "flightDurations": {
        "scheduledBlockMinutes": 200
      },
      "airportResources": {
        "departureGate": "B19"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "---"
      }
    },
    {
      "flightId": "EM2811-20220701-CPH-PMI",
      "carrierFsCode": "EM",
      "flightNumber": "2811",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "PMI",
      "departureDate": {
        "dateUtc": "2022-07-01T14:00:00.000Z",
        "dateLocal": "2022-07-01T16:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T17:05:00.000Z",
        "dateLocal": "2022-07-01T19:05:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T20:13:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T14:00:00.000Z",
          "dateLocal": "2022-07-01T16:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T14:00:00.000Z",
          "dateLocal": "2022-07-01T16:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T15:18:00.000Z",
          "dateLocal": "2022-07-01T17:18:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T15:29:00.000Z",
          "dateLocal": "2022-07-01T17:29:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T17:05:00.000Z",
          "dateLocal": "2022-07-01T19:05:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T17:05:00.000Z",
          "dateLocal": "2022-07-01T19:05:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T18:03:00.000Z",
          "dateLocal": "2022-07-01T20:03:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T18:13:00.000Z",
          "dateLocal": "2022-07-01T20:13:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T18:06:00.000Z",
          "dateLocal": "2022-07-01T20:06:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 78,
        "arrivalGateDelayMinutes": 68
      },
      "flightDurations": {
        "scheduledBlockMinutes": 185,
        "blockMinutes": 175
      },
      "airportResources": {
        "departureGate": "D1"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKAO"
      }
    },
    {
      "flightId": "EM2817-20220701-CPH-CHQ",
      "carrierFsCode": "EM",
      "flightNumber": "2817",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "CHQ",
      "departureDate": {
        "dateUtc": "2022-07-01T14:00:00.000Z",
        "dateLocal": "2022-07-01T16:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T17:30:00.000Z",
        "dateLocal": "2022-07-01T20:30:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T21:22:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T14:00:00.000Z",
          "dateLocal": "2022-07-01T16:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T14:00:00.000Z",
          "dateLocal": "2022-07-01T16:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T14:52:00.000Z",
          "dateLocal": "2022-07-01T16:52:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T15:03:00.000Z",
          "dateLocal": "2022-07-01T17:03:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T17:30:00.000Z",
          "dateLocal": "2022-07-01T20:30:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T17:30:00.000Z",
          "dateLocal": "2022-07-01T20:30:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T18:19:00.000Z",
          "dateLocal": "2022-07-01T21:19:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T18:22:00.000Z",
          "dateLocal": "2022-07-01T21:22:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T18:19:00.000Z",
          "dateLocal": "2022-07-01T21:19:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 52,
        "arrivalGateDelayMinutes": 52
      },
      "flightDurations": {
        "scheduledBlockMinutes": 210,
        "blockMinutes": 210
      },
      "airportResources": {
        "departureGate": "B19"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKAT"
      }
    },
    {
      "flightId": "EM2872-20220701-CPH-BGO",
      "carrierFsCode": "EM",
      "flightNumber": "2872",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "BGO",
      "departureDate": {
        "dateUtc": "2022-07-01T14:15:00.000Z",
        "dateLocal": "2022-07-01T16:15:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T15:35:00.000Z",
        "dateLocal": "2022-07-01T17:35:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T17:42:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T14:15:00.000Z",
          "dateLocal": "2022-07-01T16:15:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T14:15:00.000Z",
          "dateLocal": "2022-07-01T16:15:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T14:31:00.000Z",
          "dateLocal": "2022-07-01T16:31:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T14:42:00.000Z",
          "dateLocal": "2022-07-01T16:42:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T15:35:00.000Z",
          "dateLocal": "2022-07-01T17:35:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T15:35:00.000Z",
          "dateLocal": "2022-07-01T17:35:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T15:37:00.000Z",
          "dateLocal": "2022-07-01T17:37:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T15:42:00.000Z",
          "dateLocal": "2022-07-01T17:42:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T15:37:00.000Z",
          "dateLocal": "2022-07-01T17:37:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 16,
        "arrivalGateDelayMinutes": 7
      },
      "flightDurations": {
        "scheduledBlockMinutes": 80,
        "blockMinutes": 71
      },
      "airportResources": {
        "departureGate": "A6"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPT"
      }
    },
    {
      "flightId": "EM1217-20220701-CPH-AAL",
      "carrierFsCode": "EM",
      "flightNumber": "1217",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "AAL",
      "departureDate": {
        "dateUtc": "2022-07-01T14:30:00.000Z",
        "dateLocal": "2022-07-01T16:30:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T15:25:00.000Z",
        "dateLocal": "2022-07-01T17:25:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T18:16:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T14:30:00.000Z",
          "dateLocal": "2022-07-01T16:30:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T14:30:00.000Z",
          "dateLocal": "2022-07-01T16:30:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T15:28:00.000Z",
          "dateLocal": "2022-07-01T17:28:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T15:36:00.000Z",
          "dateLocal": "2022-07-01T17:36:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T15:25:00.000Z",
          "dateLocal": "2022-07-01T17:25:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T15:25:00.000Z",
          "dateLocal": "2022-07-01T17:25:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T16:16:00.000Z",
          "dateLocal": "2022-07-01T18:16:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T16:16:00.000Z",
          "dateLocal": "2022-07-01T18:16:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T16:13:00.000Z",
          "dateLocal": "2022-07-01T18:13:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 58,
        "arrivalGateDelayMinutes": 51
      },
      "flightDurations": {
        "scheduledBlockMinutes": 55,
        "blockMinutes": 48
      },
      "airportResources": {
        "departureGate": "B5"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATG"
      }
    },
    {
      "flightId": "EM1874-20220701-CPH-SVG",
      "carrierFsCode": "EM",
      "flightNumber": "1874",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "SVG",
      "departureDate": {
        "dateUtc": "2022-07-01T14:40:00.000Z",
        "dateLocal": "2022-07-01T16:40:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T15:50:00.000Z",
        "dateLocal": "2022-07-01T17:50:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T17:56:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T14:40:00.000Z",
          "dateLocal": "2022-07-01T16:40:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T14:40:00.000Z",
          "dateLocal": "2022-07-01T16:40:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T14:50:00.000Z",
          "dateLocal": "2022-07-01T16:50:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T15:01:00.000Z",
          "dateLocal": "2022-07-01T17:01:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T15:50:00.000Z",
          "dateLocal": "2022-07-01T17:50:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T15:50:00.000Z",
          "dateLocal": "2022-07-01T17:50:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T15:48:00.000Z",
          "dateLocal": "2022-07-01T17:48:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T15:56:00.000Z",
          "dateLocal": "2022-07-01T17:56:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T15:50:00.000Z",
          "dateLocal": "2022-07-01T17:50:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 10,
        "arrivalGateDelayMinutes": 6
      },
      "flightDurations": {
        "scheduledBlockMinutes": 70,
        "blockMinutes": 66
      },
      "airportResources": {
        "departureGate": "A25"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPD"
      }
    },
    {
      "flightId": "EM1517-20220701-CPH-EMR",
      "carrierFsCode": "EM",
      "flightNumber": "1517",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "EMR",
      "departureDate": {
        "dateUtc": "2022-07-01T14:40:00.000Z",
        "dateLocal": "2022-07-01T16:40:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T16:40:00.000Z",
        "dateLocal": "2022-07-01T17:40:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T18:26:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T14:40:00.000Z",
          "dateLocal": "2022-07-01T16:40:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T14:40:00.000Z",
          "dateLocal": "2022-07-01T16:40:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T15:33:00.000Z",
          "dateLocal": "2022-07-01T17:33:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T15:47:00.000Z",
          "dateLocal": "2022-07-01T17:47:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T16:40:00.000Z",
          "dateLocal": "2022-07-01T17:40:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T16:40:00.000Z",
          "dateLocal": "2022-07-01T17:40:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T17:18:00.000Z",
          "dateLocal": "2022-07-01T18:18:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T17:26:00.000Z",
          "dateLocal": "2022-07-01T18:26:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T17:13:00.000Z",
          "dateLocal": "2022-07-01T18:13:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 53,
        "arrivalGateDelayMinutes": 46
      },
      "flightDurations": {
        "scheduledBlockMinutes": 120,
        "blockMinutes": 113
      },
      "airportResources": {
        "departureGate": "D102"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "EISIJ"
      }
    },
    {
      "flightId": "EM1408-20220701-CPH-ARN",
      "carrierFsCode": "EM",
      "flightNumber": "1408",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ARN",
      "departureDate": {
        "dateUtc": "2022-07-01T15:05:00.000Z",
        "dateLocal": "2022-07-01T17:05:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T16:20:00.000Z",
        "dateLocal": "2022-07-01T18:20:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T18:46:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T15:05:00.000Z",
          "dateLocal": "2022-07-01T17:05:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T15:05:00.000Z",
          "dateLocal": "2022-07-01T17:05:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T15:38:00.000Z",
          "dateLocal": "2022-07-01T17:38:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T15:48:00.000Z",
          "dateLocal": "2022-07-01T17:48:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T16:20:00.000Z",
          "dateLocal": "2022-07-01T18:20:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T16:20:00.000Z",
          "dateLocal": "2022-07-01T18:20:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T16:38:00.000Z",
          "dateLocal": "2022-07-01T18:38:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T16:46:00.000Z",
          "dateLocal": "2022-07-01T18:46:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T16:41:00.000Z",
          "dateLocal": "2022-07-01T18:41:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 33,
        "arrivalGateDelayMinutes": 26
      },
      "flightDurations": {
        "scheduledBlockMinutes": 75,
        "blockMinutes": 68
      },
      "airportResources": {
        "departureGate": "B19",
        "arrivalGate": "F33"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPR"
      }
    },
    {
      "flightId": "EM0627-20220701-CPH-DUS",
      "carrierFsCode": "EM",
      "flightNumber": "627",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "DUS",
      "departureDate": {
        "dateUtc": "2022-07-01T15:10:00.000Z",
        "dateLocal": "2022-07-01T17:10:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T16:30:00.000Z",
        "dateLocal": "2022-07-01T18:30:00.000"
      },
      "status": "A",
      "statusDescription": "TOOK-OFF",
      "statusInfo": {
        "status": "Departed,Delayed",
        "indicator": "#000099",
        "displayStatus": "departed",
        "displayTime": "2022-07-01T20:18:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T15:10:00.000Z",
          "dateLocal": "2022-07-01T17:10:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T15:10:00.000Z",
          "dateLocal": "2022-07-01T17:10:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T18:18:00.000Z",
          "dateLocal": "2022-07-01T20:18:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T18:28:00.000Z",
          "dateLocal": "2022-07-01T20:28:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T16:30:00.000Z",
          "dateLocal": "2022-07-01T18:30:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T16:30:00.000Z",
          "dateLocal": "2022-07-01T18:30:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 188
      },
      "flightDurations": {
        "scheduledBlockMinutes": 80
      },
      "airportResources": {
        "departureGate": "B4"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPX"
      }
    },
    {
      "flightId": "EM0687-20220701-CPH-MXP",
      "carrierFsCode": "EM",
      "flightNumber": "687",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "MXP",
      "departureDate": {
        "dateUtc": "2022-07-01T15:10:00.000Z",
        "dateLocal": "2022-07-01T17:10:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T17:15:00.000Z",
        "dateLocal": "2022-07-01T19:15:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T19:48:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T15:10:00.000Z",
          "dateLocal": "2022-07-01T17:10:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T15:10:00.000Z",
          "dateLocal": "2022-07-01T17:10:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T15:53:00.000Z",
          "dateLocal": "2022-07-01T17:53:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T16:01:00.000Z",
          "dateLocal": "2022-07-01T18:01:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T17:15:00.000Z",
          "dateLocal": "2022-07-01T19:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T17:15:00.000Z",
          "dateLocal": "2022-07-01T19:15:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T17:41:00.000Z",
          "dateLocal": "2022-07-01T19:41:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T17:48:00.000Z",
          "dateLocal": "2022-07-01T19:48:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T17:44:00.000Z",
          "dateLocal": "2022-07-01T19:44:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 43,
        "arrivalGateDelayMinutes": 33
      },
      "flightDurations": {
        "scheduledBlockMinutes": 125,
        "blockMinutes": 115
      },
      "airportResources": {
        "departureGate": "B15"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPI"
      }
    },
    {
      "flightId": "EM0627-20220701-CPH-CGN",
      "carrierFsCode": "EM",
      "flightNumber": "627",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "CGN",
      "departureDate": {
        "dateUtc": "2022-07-01T15:10:00.000Z",
        "dateLocal": "2022-07-01T17:10:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T19:40:00.000Z",
        "dateLocal": "2022-07-01T21:40:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T21:55:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T15:10:00.000Z",
          "dateLocal": "2022-07-01T17:10:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T15:10:00.000Z",
          "dateLocal": "2022-07-01T17:10:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T18:18:00.000Z",
          "dateLocal": "2022-07-01T20:18:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T18:28:00.000Z",
          "dateLocal": "2022-07-01T20:28:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T19:40:00.000Z",
          "dateLocal": "2022-07-01T21:40:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T19:40:00.000Z",
          "dateLocal": "2022-07-01T21:40:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T19:40:00.000Z",
          "dateLocal": "2022-07-01T21:40:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T19:55:00.000Z",
          "dateLocal": "2022-07-01T21:55:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T19:50:00.000Z",
          "dateLocal": "2022-07-01T21:50:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 188,
        "arrivalGateDelayMinutes": 15
      },
      "flightDurations": {
        "scheduledBlockMinutes": 270,
        "blockMinutes": 97
      },
      "airportResources": {
        "departureGate": "B4"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPX"
      }
    },
    {
      "flightId": "EM0757-20220701-CPH-GDN",
      "carrierFsCode": "EM",
      "flightNumber": "757",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "GDN",
      "departureDate": {
        "dateUtc": "2022-07-01T15:15:00.000Z",
        "dateLocal": "2022-07-01T17:15:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T16:30:00.000Z",
        "dateLocal": "2022-07-01T18:30:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T20:25:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T15:15:00.000Z",
          "dateLocal": "2022-07-01T17:15:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T15:15:00.000Z",
          "dateLocal": "2022-07-01T17:15:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T16:56:00.000Z",
          "dateLocal": "2022-07-01T18:56:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T17:05:00.000Z",
          "dateLocal": "2022-07-01T19:05:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T16:30:00.000Z",
          "dateLocal": "2022-07-01T18:30:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T16:30:00.000Z",
          "dateLocal": "2022-07-01T18:30:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T18:22:00.000Z",
          "dateLocal": "2022-07-01T20:22:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T18:25:00.000Z",
          "dateLocal": "2022-07-01T20:25:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T18:17:00.000Z",
          "dateLocal": "2022-07-01T20:17:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 101,
        "arrivalGateDelayMinutes": 115
      },
      "flightDurations": {
        "scheduledBlockMinutes": 75,
        "blockMinutes": 89
      },
      "airportResources": {
        "departureGate": "A28"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATI"
      }
    },
    {
      "flightId": "EM0791-20220701-CPH-NCE",
      "carrierFsCode": "EM",
      "flightNumber": "791",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "NCE",
      "departureDate": {
        "dateUtc": "2022-07-01T15:15:00.000Z",
        "dateLocal": "2022-07-01T17:15:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T17:40:00.000Z",
        "dateLocal": "2022-07-01T19:40:00.000"
      },
      "status": "C",
      "statusDescription": "CANCELLED",
      "statusInfo": {
        "status": "Cancelled",
        "indicator": "red",
        "displayStatus": "Cancelled",
        "displayTime": null
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T15:15:00.000Z",
          "dateLocal": "2022-07-01T17:15:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T15:15:00.000Z",
          "dateLocal": "2022-07-01T17:15:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T17:40:00.000Z",
          "dateLocal": "2022-07-01T19:40:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T17:40:00.000Z",
          "dateLocal": "2022-07-01T19:40:00.000"
        }
      },
      "delays": {},
      "flightDurations": {
        "scheduledBlockMinutes": 145
      },
      "airportResources": {
        "departureGate": "B6"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "---"
      }
    },
    {
      "flightId": "EM0541-20220701-CPH-MAN",
      "carrierFsCode": "EM",
      "flightNumber": "541",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "MAN",
      "departureDate": {
        "dateUtc": "2022-07-01T15:35:00.000Z",
        "dateLocal": "2022-07-01T17:35:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T17:30:00.000Z",
        "dateLocal": "2022-07-01T18:30:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T18:59:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T15:35:00.000Z",
          "dateLocal": "2022-07-01T17:35:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T15:35:00.000Z",
          "dateLocal": "2022-07-01T17:35:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T16:08:00.000Z",
          "dateLocal": "2022-07-01T18:08:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T16:20:00.000Z",
          "dateLocal": "2022-07-01T18:20:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T17:30:00.000Z",
          "dateLocal": "2022-07-01T18:30:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T17:30:00.000Z",
          "dateLocal": "2022-07-01T18:30:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T17:50:00.000Z",
          "dateLocal": "2022-07-01T18:50:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T17:59:00.000Z",
          "dateLocal": "2022-07-01T18:59:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T17:49:00.000Z",
          "dateLocal": "2022-07-01T18:49:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 33,
        "arrivalGateDelayMinutes": 29
      },
      "flightDurations": {
        "scheduledBlockMinutes": 115,
        "blockMinutes": 111
      },
      "airportResources": {
        "departureGate": "D103"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPS"
      }
    },
    {
      "flightId": "EM1259-20220701-CPH-AAR",
      "carrierFsCode": "EM",
      "flightNumber": "1259",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "AAR",
      "departureDate": {
        "dateUtc": "2022-07-01T15:40:00.000Z",
        "dateLocal": "2022-07-01T17:40:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T16:20:00.000Z",
        "dateLocal": "2022-07-01T18:20:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T18:45:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T15:40:00.000Z",
          "dateLocal": "2022-07-01T17:40:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T15:40:00.000Z",
          "dateLocal": "2022-07-01T17:40:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T16:10:00.000Z",
          "dateLocal": "2022-07-01T18:10:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T16:15:00.000Z",
          "dateLocal": "2022-07-01T18:15:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T16:20:00.000Z",
          "dateLocal": "2022-07-01T18:20:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T16:20:00.000Z",
          "dateLocal": "2022-07-01T18:20:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T16:43:00.000Z",
          "dateLocal": "2022-07-01T18:43:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T16:45:00.000Z",
          "dateLocal": "2022-07-01T18:45:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T16:40:00.000Z",
          "dateLocal": "2022-07-01T18:40:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 30,
        "arrivalGateDelayMinutes": 25
      },
      "flightDurations": {
        "scheduledBlockMinutes": 40,
        "blockMinutes": 35
      },
      "airportResources": {
        "departureGate": "E3"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATD"
      }
    },
    {
      "flightId": "EM0609-20220701-CPH-ZRH",
      "carrierFsCode": "EM",
      "flightNumber": "609",
      "operatedBy": "EM Link",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ZRH",
      "departureDate": {
        "dateUtc": "2022-07-01T16:00:00.000Z",
        "dateLocal": "2022-07-01T18:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T17:45:00.000Z",
        "dateLocal": "2022-07-01T19:45:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T21:27:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T16:00:00.000Z",
          "dateLocal": "2022-07-01T18:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T16:00:00.000Z",
          "dateLocal": "2022-07-01T18:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T17:46:00.000Z",
          "dateLocal": "2022-07-01T19:46:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T17:55:00.000Z",
          "dateLocal": "2022-07-01T19:55:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T17:45:00.000Z",
          "dateLocal": "2022-07-01T19:45:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T17:45:00.000Z",
          "dateLocal": "2022-07-01T19:45:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T19:30:00.000Z",
          "dateLocal": "2022-07-01T21:30:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T19:27:00.000Z",
          "dateLocal": "2022-07-01T21:27:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T19:22:00.000Z",
          "dateLocal": "2022-07-01T21:22:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 106,
        "arrivalGateDelayMinutes": 102
      },
      "flightDurations": {
        "scheduledBlockMinutes": 105,
        "blockMinutes": 101
      },
      "airportResources": {
        "departureGate": "B19"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "EMJ",
        "actualEquipmentIataCode": "EMJ",
        "tailNumber": "SEREM"
      }
    },
    {
      "flightId": "EM1683-20220701-CPH-MXP",
      "carrierFsCode": "EM",
      "flightNumber": "1683",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "MXP",
      "departureDate": {
        "dateUtc": "2022-07-01T16:15:00.000Z",
        "dateLocal": "2022-07-01T18:15:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T18:20:00.000Z",
        "dateLocal": "2022-07-01T20:20:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T21:19:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T16:15:00.000Z",
          "dateLocal": "2022-07-01T18:15:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T16:15:00.000Z",
          "dateLocal": "2022-07-01T18:15:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T17:18:00.000Z",
          "dateLocal": "2022-07-01T19:18:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T17:28:00.000Z",
          "dateLocal": "2022-07-01T19:28:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T18:20:00.000Z",
          "dateLocal": "2022-07-01T20:20:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T18:20:00.000Z",
          "dateLocal": "2022-07-01T20:20:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T19:19:00.000Z",
          "dateLocal": "2022-07-01T21:19:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T19:19:00.000Z",
          "dateLocal": "2022-07-01T21:19:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T19:15:00.000Z",
          "dateLocal": "2022-07-01T21:15:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 63,
        "arrivalGateDelayMinutes": 59
      },
      "flightDurations": {
        "scheduledBlockMinutes": 125,
        "blockMinutes": 121
      },
      "airportResources": {
        "departureGate": "D1"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGED"
      }
    },
    {
      "flightId": "EM0559-20220701-CPH-CDG",
      "carrierFsCode": "EM",
      "flightNumber": "559",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "CDG",
      "departureDate": {
        "dateUtc": "2022-07-01T17:00:00.000Z",
        "dateLocal": "2022-07-01T19:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T18:55:00.000Z",
        "dateLocal": "2022-07-01T20:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T21:10:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T17:00:00.000Z",
          "dateLocal": "2022-07-01T19:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T17:00:00.000Z",
          "dateLocal": "2022-07-01T19:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T17:17:00.000Z",
          "dateLocal": "2022-07-01T19:17:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T17:26:00.000Z",
          "dateLocal": "2022-07-01T19:26:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T18:55:00.000Z",
          "dateLocal": "2022-07-01T20:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T18:55:00.000Z",
          "dateLocal": "2022-07-01T20:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T18:54:00.000Z",
          "dateLocal": "2022-07-01T20:54:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T19:10:00.000Z",
          "dateLocal": "2022-07-01T21:10:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T18:58:00.000Z",
          "dateLocal": "2022-07-01T20:58:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 17,
        "arrivalGateDelayMinutes": 15
      },
      "flightDurations": {
        "scheduledBlockMinutes": 115,
        "blockMinutes": 113
      },
      "airportResources": {
        "departureGate": "B7"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGEC"
      }
    },
    {
      "flightId": "EM1470-20220701-CPH-OSL",
      "carrierFsCode": "EM",
      "flightNumber": "1470",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "OSL",
      "departureDate": {
        "dateUtc": "2022-07-01T17:05:00.000Z",
        "dateLocal": "2022-07-01T19:05:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T18:15:00.000Z",
        "dateLocal": "2022-07-01T20:15:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T21:05:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T17:05:00.000Z",
          "dateLocal": "2022-07-01T19:05:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T17:05:00.000Z",
          "dateLocal": "2022-07-01T19:05:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T17:58:00.000Z",
          "dateLocal": "2022-07-01T19:58:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T18:08:00.000Z",
          "dateLocal": "2022-07-01T20:08:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T18:15:00.000Z",
          "dateLocal": "2022-07-01T20:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T18:15:00.000Z",
          "dateLocal": "2022-07-01T20:15:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T18:58:00.000Z",
          "dateLocal": "2022-07-01T20:58:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T19:05:00.000Z",
          "dateLocal": "2022-07-01T21:05:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T18:58:00.000Z",
          "dateLocal": "2022-07-01T20:58:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 53,
        "arrivalGateDelayMinutes": 50
      },
      "flightDurations": {
        "scheduledBlockMinutes": 70,
        "blockMinutes": 67
      },
      "airportResources": {
        "departureGate": "B10"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKBB"
      }
    },
    {
      "flightId": "EM1430-20220701-CPH-ARN",
      "carrierFsCode": "EM",
      "flightNumber": "1430",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ARN",
      "departureDate": {
        "dateUtc": "2022-07-01T17:15:00.000Z",
        "dateLocal": "2022-07-01T19:15:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T18:30:00.000Z",
        "dateLocal": "2022-07-01T20:30:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T22:05:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T17:15:00.000Z",
          "dateLocal": "2022-07-01T19:15:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T17:15:00.000Z",
          "dateLocal": "2022-07-01T19:15:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T18:53:00.000Z",
          "dateLocal": "2022-07-01T20:53:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T19:04:00.000Z",
          "dateLocal": "2022-07-01T21:04:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T18:30:00.000Z",
          "dateLocal": "2022-07-01T20:30:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T18:30:00.000Z",
          "dateLocal": "2022-07-01T20:30:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T20:01:00.000Z",
          "dateLocal": "2022-07-01T22:01:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T20:05:00.000Z",
          "dateLocal": "2022-07-01T22:05:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T20:00:00.000Z",
          "dateLocal": "2022-07-01T22:00:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 98,
        "arrivalGateDelayMinutes": 95
      },
      "flightDurations": {
        "scheduledBlockMinutes": 75,
        "blockMinutes": 72
      },
      "airportResources": {
        "departureGate": "B9",
        "arrivalGate": "8"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKBK"
      }
    },
    {
      "flightId": "EM0553-20220701-CPH-AMS",
      "carrierFsCode": "EM",
      "flightNumber": "553",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "AMS",
      "departureDate": {
        "dateUtc": "2022-07-01T17:40:00.000Z",
        "dateLocal": "2022-07-01T19:40:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T19:05:00.000Z",
        "dateLocal": "2022-07-01T21:05:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T21:01:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T17:40:00.000Z",
          "dateLocal": "2022-07-01T19:40:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T17:40:00.000Z",
          "dateLocal": "2022-07-01T19:40:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T17:43:00.000Z",
          "dateLocal": "2022-07-01T19:43:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T17:53:00.000Z",
          "dateLocal": "2022-07-01T19:53:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T19:05:00.000Z",
          "dateLocal": "2022-07-01T21:05:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T19:05:00.000Z",
          "dateLocal": "2022-07-01T21:05:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T18:48:00.000Z",
          "dateLocal": "2022-07-01T20:48:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T19:01:00.000Z",
          "dateLocal": "2022-07-01T21:01:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T18:54:00.000Z",
          "dateLocal": "2022-07-01T20:54:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 3
      },
      "flightDurations": {
        "scheduledBlockMinutes": 85,
        "blockMinutes": 78
      },
      "airportResources": {
        "departureGate": "A26"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPB"
      }
    },
    {
      "flightId": "EM1444-20220701-CPH-GOT",
      "carrierFsCode": "EM",
      "flightNumber": "1444",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "GOT",
      "departureDate": {
        "dateUtc": "2022-07-01T17:45:00.000Z",
        "dateLocal": "2022-07-01T19:45:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T18:40:00.000Z",
        "dateLocal": "2022-07-01T20:40:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T21:10:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T17:45:00.000Z",
          "dateLocal": "2022-07-01T19:45:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T17:45:00.000Z",
          "dateLocal": "2022-07-01T19:45:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T18:19:00.000Z",
          "dateLocal": "2022-07-01T20:19:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T18:26:00.000Z",
          "dateLocal": "2022-07-01T20:26:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T18:40:00.000Z",
          "dateLocal": "2022-07-01T20:40:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T18:40:00.000Z",
          "dateLocal": "2022-07-01T20:40:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T19:06:00.000Z",
          "dateLocal": "2022-07-01T21:06:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T19:10:00.000Z",
          "dateLocal": "2022-07-01T21:10:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T19:07:00.000Z",
          "dateLocal": "2022-07-01T21:07:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 34,
        "arrivalGateDelayMinutes": 30
      },
      "flightDurations": {
        "scheduledBlockMinutes": 55,
        "blockMinutes": 51
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "E4",
        "arrivalGate": "17"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATG"
      }
    },
    {
      "flightId": "EM0651-20220701-CPH-HAM",
      "carrierFsCode": "EM",
      "flightNumber": "651",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "HAM",
      "departureDate": {
        "dateUtc": "2022-07-01T17:45:00.000Z",
        "dateLocal": "2022-07-01T19:45:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T18:35:00.000Z",
        "dateLocal": "2022-07-01T20:35:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T20:38:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T17:45:00.000Z",
          "dateLocal": "2022-07-01T19:45:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T17:45:00.000Z",
          "dateLocal": "2022-07-01T19:45:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T17:54:00.000Z",
          "dateLocal": "2022-07-01T19:54:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T18:03:00.000Z",
          "dateLocal": "2022-07-01T20:03:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T18:35:00.000Z",
          "dateLocal": "2022-07-01T20:35:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T18:35:00.000Z",
          "dateLocal": "2022-07-01T20:35:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T18:43:00.000Z",
          "dateLocal": "2022-07-01T20:43:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T18:38:00.000Z",
          "dateLocal": "2022-07-01T20:38:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T18:33:00.000Z",
          "dateLocal": "2022-07-01T20:33:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 9,
        "arrivalGateDelayMinutes": 3
      },
      "flightDurations": {
        "scheduledBlockMinutes": 50,
        "blockMinutes": 44
      },
      "airportResources": {
        "departureGate": "B15"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGEA"
      }
    },
    {
      "flightId": "EM1219-20220701-CPH-AAL",
      "carrierFsCode": "EM",
      "flightNumber": "1219",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "AAL",
      "departureDate": {
        "dateUtc": "2022-07-01T18:00:00.000Z",
        "dateLocal": "2022-07-01T20:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T18:55:00.000Z",
        "dateLocal": "2022-07-01T20:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T21:31:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T18:00:00.000Z",
          "dateLocal": "2022-07-01T20:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T18:00:00.000Z",
          "dateLocal": "2022-07-01T20:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T18:42:00.000Z",
          "dateLocal": "2022-07-01T20:42:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T18:48:00.000Z",
          "dateLocal": "2022-07-01T20:48:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T18:55:00.000Z",
          "dateLocal": "2022-07-01T20:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T18:55:00.000Z",
          "dateLocal": "2022-07-01T20:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T19:25:00.000Z",
          "dateLocal": "2022-07-01T21:25:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T19:31:00.000Z",
          "dateLocal": "2022-07-01T21:31:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T19:26:00.000Z",
          "dateLocal": "2022-07-01T21:26:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 42,
        "arrivalGateDelayMinutes": 36
      },
      "flightDurations": {
        "scheduledBlockMinutes": 55,
        "blockMinutes": 49
      },
      "airportResources": {
        "departureGate": "B5"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATD"
      }
    },
    {
      "flightId": "EM2683-20220701-CPH-BLQ",
      "carrierFsCode": "EM",
      "flightNumber": "2683",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "BLQ",
      "departureDate": {
        "dateUtc": "2022-07-01T18:10:00.000Z",
        "dateLocal": "2022-07-01T20:10:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T20:15:00.000Z",
        "dateLocal": "2022-07-01T22:15:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T22:52:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T18:10:00.000Z",
          "dateLocal": "2022-07-01T20:10:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T18:10:00.000Z",
          "dateLocal": "2022-07-01T20:10:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T18:49:00.000Z",
          "dateLocal": "2022-07-01T20:49:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T19:02:00.000Z",
          "dateLocal": "2022-07-01T21:02:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T20:15:00.000Z",
          "dateLocal": "2022-07-01T22:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T20:15:00.000Z",
          "dateLocal": "2022-07-01T22:15:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T20:42:00.000Z",
          "dateLocal": "2022-07-01T22:42:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T20:52:00.000Z",
          "dateLocal": "2022-07-01T22:52:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T20:48:00.000Z",
          "dateLocal": "2022-07-01T22:48:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 39,
        "arrivalGateDelayMinutes": 37
      },
      "flightDurations": {
        "scheduledBlockMinutes": 125,
        "blockMinutes": 123
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "B8"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPT"
      }
    },
    {
      "flightId": "EM1501-20220701-CPH-EMR",
      "carrierFsCode": "EM",
      "flightNumber": "1501",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "EMR",
      "departureDate": {
        "dateUtc": "2022-07-01T18:35:00.000Z",
        "dateLocal": "2022-07-01T20:35:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T20:35:00.000Z",
        "dateLocal": "2022-07-01T21:35:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-01T22:35:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T18:35:00.000Z",
          "dateLocal": "2022-07-01T20:35:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T18:35:00.000Z",
          "dateLocal": "2022-07-01T20:35:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T19:48:00.000Z",
          "dateLocal": "2022-07-01T21:48:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T20:00:00.000Z",
          "dateLocal": "2022-07-01T22:00:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T20:35:00.000Z",
          "dateLocal": "2022-07-01T21:35:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T20:35:00.000Z",
          "dateLocal": "2022-07-01T21:35:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T21:25:00.000Z",
          "dateLocal": "2022-07-01T22:25:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T21:35:00.000Z",
          "dateLocal": "2022-07-01T22:35:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T21:28:00.000Z",
          "dateLocal": "2022-07-01T22:28:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 73,
        "arrivalGateDelayMinutes": 60
      },
      "flightDurations": {
        "scheduledBlockMinutes": 120,
        "blockMinutes": 107
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "C30",
        "arrivalTerminal": "2"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "EISIE"
      }
    },
    {
      "flightId": "EM1876-20220701-CPH-SVG",
      "carrierFsCode": "EM",
      "flightNumber": "1876",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "SVG",
      "departureDate": {
        "dateUtc": "2022-07-01T18:55:00.000Z",
        "dateLocal": "2022-07-01T20:55:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T20:05:00.000Z",
        "dateLocal": "2022-07-01T22:05:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-02T02:23:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T18:55:00.000Z",
          "dateLocal": "2022-07-01T20:55:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T18:55:00.000Z",
          "dateLocal": "2022-07-01T20:55:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T23:19:00.000Z",
          "dateLocal": "2022-07-02T01:19:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T23:29:00.000Z",
          "dateLocal": "2022-07-02T01:29:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T20:05:00.000Z",
          "dateLocal": "2022-07-01T22:05:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T20:05:00.000Z",
          "dateLocal": "2022-07-01T22:05:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-02T00:18:00.000Z",
          "dateLocal": "2022-07-02T02:18:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-02T00:23:00.000Z",
          "dateLocal": "2022-07-02T02:23:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-02T00:19:00.000Z",
          "dateLocal": "2022-07-02T02:19:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 264,
        "arrivalGateDelayMinutes": 258
      },
      "flightDurations": {
        "scheduledBlockMinutes": 70,
        "blockMinutes": 64
      },
      "airportResources": {
        "departureGate": "B6"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPX"
      }
    },
    {
      "flightId": "EM0476-20220701-CPH-OSL",
      "carrierFsCode": "EM",
      "flightNumber": "476",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "OSL",
      "departureDate": {
        "dateUtc": "2022-07-01T20:05:00.000Z",
        "dateLocal": "2022-07-01T22:05:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T21:15:00.000Z",
        "dateLocal": "2022-07-01T23:15:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-02T00:27:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T20:05:00.000Z",
          "dateLocal": "2022-07-01T22:05:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T20:05:00.000Z",
          "dateLocal": "2022-07-01T22:05:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T21:16:00.000Z",
          "dateLocal": "2022-07-01T23:16:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T21:28:00.000Z",
          "dateLocal": "2022-07-01T23:28:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T21:15:00.000Z",
          "dateLocal": "2022-07-01T23:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T21:15:00.000Z",
          "dateLocal": "2022-07-01T23:15:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T22:29:00.000Z",
          "dateLocal": "2022-07-02T00:29:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T22:27:00.000Z",
          "dateLocal": "2022-07-02T00:27:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T22:19:00.000Z",
          "dateLocal": "2022-07-02T00:19:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 71,
        "arrivalGateDelayMinutes": 72
      },
      "flightDurations": {
        "scheduledBlockMinutes": 70,
        "blockMinutes": 71
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "A12"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "EISIO"
      }
    },
    {
      "flightId": "EM0414-20220701-CPH-ARN",
      "carrierFsCode": "EM",
      "flightNumber": "414",
      "operatedBy": "EM Airlines",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ARN",
      "departureDate": {
        "dateUtc": "2022-07-01T20:30:00.000Z",
        "dateLocal": "2022-07-01T22:30:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T21:45:00.000Z",
        "dateLocal": "2022-07-01T23:45:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-02T00:17:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T20:30:00.000Z",
          "dateLocal": "2022-07-01T22:30:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T20:30:00.000Z",
          "dateLocal": "2022-07-01T22:30:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T21:10:00.000Z",
          "dateLocal": "2022-07-01T23:10:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T21:21:00.000Z",
          "dateLocal": "2022-07-01T23:21:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T21:45:00.000Z",
          "dateLocal": "2022-07-01T23:45:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T21:45:00.000Z",
          "dateLocal": "2022-07-01T23:45:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T22:18:00.000Z",
          "dateLocal": "2022-07-02T00:18:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T22:17:00.000Z",
          "dateLocal": "2022-07-02T00:17:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T22:12:00.000Z",
          "dateLocal": "2022-07-02T00:12:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 40,
        "arrivalGateDelayMinutes": 32
      },
      "flightDurations": {
        "scheduledBlockMinutes": 75,
        "blockMinutes": 67
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "E4",
        "arrivalTerminal": "5",
        "arrivalGate": "11"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "EISIJ"
      }
    },
    {
      "flightId": "EM2874-20220701-CPH-BGO",
      "carrierFsCode": "EM",
      "flightNumber": "2874",
      "operatedBy": "EM Link",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "BGO",
      "departureDate": {
        "dateUtc": "2022-07-01T20:55:00.000Z",
        "dateLocal": "2022-07-01T22:55:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T22:15:00.000Z",
        "dateLocal": "2022-07-02T00:15:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-02T02:01:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T20:55:00.000Z",
          "dateLocal": "2022-07-01T22:55:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T20:55:00.000Z",
          "dateLocal": "2022-07-01T22:55:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T22:50:00.000Z",
          "dateLocal": "2022-07-02T00:50:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T22:59:00.000Z",
          "dateLocal": "2022-07-02T00:59:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T22:15:00.000Z",
          "dateLocal": "2022-07-02T00:15:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T22:15:00.000Z",
          "dateLocal": "2022-07-02T00:15:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-02T00:01:00.000Z",
          "dateLocal": "2022-07-02T02:01:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-02T00:01:00.000Z",
          "dateLocal": "2022-07-02T02:01:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T23:58:00.000Z",
          "dateLocal": "2022-07-02T01:58:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 115,
        "arrivalGateDelayMinutes": 106
      },
      "flightDurations": {
        "scheduledBlockMinutes": 80,
        "blockMinutes": 71
      },
      "airportResources": {
        "departureGate": "D2"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "EMJ",
        "actualEquipmentIataCode": "EMJ",
        "tailNumber": "SEREM"
      }
    },
    {
      "flightId": "EM2888-20220701-CPH-TRD",
      "carrierFsCode": "EM",
      "flightNumber": "2888",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "TRD",
      "departureDate": {
        "dateUtc": "2022-07-01T20:55:00.000Z",
        "dateLocal": "2022-07-01T22:55:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T22:30:00.000Z",
        "dateLocal": "2022-07-02T00:30:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-02T01:08:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T20:55:00.000Z",
          "dateLocal": "2022-07-01T22:55:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T20:55:00.000Z",
          "dateLocal": "2022-07-01T22:55:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T21:40:00.000Z",
          "dateLocal": "2022-07-01T23:40:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T21:53:00.000Z",
          "dateLocal": "2022-07-01T23:53:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T22:30:00.000Z",
          "dateLocal": "2022-07-02T00:30:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T22:30:00.000Z",
          "dateLocal": "2022-07-02T00:30:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T23:03:00.000Z",
          "dateLocal": "2022-07-02T01:03:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T23:08:00.000Z",
          "dateLocal": "2022-07-02T01:08:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T23:04:00.000Z",
          "dateLocal": "2022-07-02T01:04:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 45,
        "arrivalGateDelayMinutes": 38
      },
      "flightDurations": {
        "scheduledBlockMinutes": 95,
        "blockMinutes": 88
      },
      "airportResources": {
        "departureGate": "A20"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIFPI"
      }
    },
    {
      "flightId": "EM1428-20220701-CPH-ARN",
      "carrierFsCode": "EM",
      "flightNumber": "1428",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "ARN",
      "departureDate": {
        "dateUtc": "2022-07-01T21:00:00.000Z",
        "dateLocal": "2022-07-01T23:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T22:10:00.000Z",
        "dateLocal": "2022-07-02T00:10:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-02T00:55:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T21:00:00.000Z",
          "dateLocal": "2022-07-01T23:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T21:00:00.000Z",
          "dateLocal": "2022-07-01T23:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T21:44:00.000Z",
          "dateLocal": "2022-07-01T23:44:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T21:58:00.000Z",
          "dateLocal": "2022-07-01T23:58:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T22:10:00.000Z",
          "dateLocal": "2022-07-02T00:10:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T22:10:00.000Z",
          "dateLocal": "2022-07-02T00:10:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T22:50:00.000Z",
          "dateLocal": "2022-07-02T00:50:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T22:55:00.000Z",
          "dateLocal": "2022-07-02T00:55:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T22:51:00.000Z",
          "dateLocal": "2022-07-02T00:51:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 44,
        "arrivalGateDelayMinutes": 45
      },
      "flightDurations": {
        "scheduledBlockMinutes": 70,
        "blockMinutes": 71
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "B7",
        "arrivalTerminal": "5",
        "arrivalGate": "5A"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "SERON"
      }
    },
    {
      "flightId": "EM1225-20220701-CPH-AAL",
      "carrierFsCode": "EM",
      "flightNumber": "1225",
      "operatedBy": "EMfly",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "AAL",
      "departureDate": {
        "dateUtc": "2022-07-01T21:00:00.000Z",
        "dateLocal": "2022-07-01T23:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T21:55:00.000Z",
        "dateLocal": "2022-07-01T23:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-02T00:14:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T21:00:00.000Z",
          "dateLocal": "2022-07-01T23:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T21:00:00.000Z",
          "dateLocal": "2022-07-01T23:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T21:21:00.000Z",
          "dateLocal": "2022-07-01T23:21:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T21:32:00.000Z",
          "dateLocal": "2022-07-01T23:32:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T21:55:00.000Z",
          "dateLocal": "2022-07-01T23:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T21:55:00.000Z",
          "dateLocal": "2022-07-01T23:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T22:05:00.000Z",
          "dateLocal": "2022-07-02T00:05:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T22:14:00.000Z",
          "dateLocal": "2022-07-02T00:14:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T22:11:00.000Z",
          "dateLocal": "2022-07-02T00:11:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 21,
        "arrivalGateDelayMinutes": 19
      },
      "flightDurations": {
        "scheduledBlockMinutes": 55,
        "blockMinutes": 53
      },
      "airportResources": {
        "departureGate": "E5"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "ATR",
        "actualEquipmentIataCode": "ATR",
        "tailNumber": "ESATG"
      }
    },
    {
      "flightId": "EM1474-20220701-CPH-OSL",
      "carrierFsCode": "EM",
      "flightNumber": "1474",
      "operatedBy": "EM",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "OSL",
      "departureDate": {
        "dateUtc": "2022-07-01T21:00:00.000Z",
        "dateLocal": "2022-07-01T23:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T22:10:00.000Z",
        "dateLocal": "2022-07-02T00:10:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-02T01:13:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T21:00:00.000Z",
          "dateLocal": "2022-07-01T23:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T21:00:00.000Z",
          "dateLocal": "2022-07-01T23:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T22:01:00.000Z",
          "dateLocal": "2022-07-02T00:01:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T22:18:00.000Z",
          "dateLocal": "2022-07-02T00:18:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T22:10:00.000Z",
          "dateLocal": "2022-07-02T00:10:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T22:10:00.000Z",
          "dateLocal": "2022-07-02T00:10:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T23:08:00.000Z",
          "dateLocal": "2022-07-02T01:08:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T23:13:00.000Z",
          "dateLocal": "2022-07-02T01:13:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T23:04:00.000Z",
          "dateLocal": "2022-07-02T01:04:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 61,
        "arrivalGateDelayMinutes": 63
      },
      "flightDurations": {
        "scheduledBlockMinutes": 70,
        "blockMinutes": 72
      },
      "airportResources": {
        "departureGate": "B9"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "32S",
        "actualEquipmentIataCode": "32S",
        "tailNumber": "OYKBB"
      }
    },
    {
      "flightId": "EM0753-20220701-CPH-GDN",
      "carrierFsCode": "EM",
      "flightNumber": "753",
      "operatedBy": "EMjet",
      "codeShares": [],
      "departureAirportFsCode": "CPH",
      "arrivalAirportFsCode": "GDN",
      "departureDate": {
        "dateUtc": "2022-07-01T21:00:00.000Z",
        "dateLocal": "2022-07-01T23:00:00.000"
      },
      "arrivalDate": {
        "dateUtc": "2022-07-01T21:55:00.000Z",
        "dateLocal": "2022-07-01T23:55:00.000"
      },
      "status": "L",
      "statusDescription": "ARRIVED",
      "statusInfo": {
        "status": "Arrived,Delayed",
        "indicator": "#000099",
        "displayStatus": "Arrived",
        "displayTime": "2022-07-02T00:23:00"
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateUtc": "2022-07-01T21:00:00.000Z",
          "dateLocal": "2022-07-01T23:00:00.000"
        },
        "scheduledGateDeparture": {
          "dateUtc": "2022-07-01T21:00:00.000Z",
          "dateLocal": "2022-07-01T23:00:00.000"
        },
        "actualGateDeparture": {
          "dateUtc": "2022-07-01T21:24:00.000Z",
          "dateLocal": "2022-07-01T23:24:00.000"
        },
        "takeoff": {
          "dateUtc": "2022-07-01T21:34:00.000Z",
          "dateLocal": "2022-07-01T23:34:00.000"
        },
        "publishedArrival": {
          "dateUtc": "2022-07-01T21:55:00.000Z",
          "dateLocal": "2022-07-01T23:55:00.000"
        },
        "scheduledGateArrival": {
          "dateUtc": "2022-07-01T21:55:00.000Z",
          "dateLocal": "2022-07-01T23:55:00.000"
        },
        "estimatedGateArrival": {
          "dateUtc": "2022-07-01T22:16:00.000Z",
          "dateLocal": "2022-07-02T00:16:00.000"
        },
        "actualGateArrival": {
          "dateUtc": "2022-07-01T22:23:00.000Z",
          "dateLocal": "2022-07-02T00:23:00.000"
        },
        "landing": {
          "dateUtc": "2022-07-01T22:21:00.000Z",
          "dateLocal": "2022-07-02T00:21:00.000"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 24,
        "arrivalGateDelayMinutes": 28
      },
      "flightDurations": {
        "scheduledBlockMinutes": 55,
        "blockMinutes": 59
      },
      "airportResources": {
        "departureGate": "B8"
      },
      "flightEquipment": {
        "scheduledEquipmentIataCode": "CRJ",
        "actualEquipmentIataCode": "CRJ",
        "tailNumber": "EIGEA"
      }
    }
  ]
}

describe('FlightListItemComponent', () => {
  let component: FlightListItemComponent;
  let fixture: ComponentFixture<FlightListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [FlightListItemComponent]
    })
      .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(FlightListItemComponent);
    component = fixture.componentInstance;
    jasmine.clock().mockDate(new Date('2022-11-05T01:01:01'));
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('check if the checkToday method returns true for the same day', () => {
    expect((component as any)?.checkToday('22', '2022-02-22')).toBeTrue();
  });

  it('check if the checkToday method returns true for the same day', () => {
    component.fetchData()
  });

  it('should create and call http service on init', () => {
    const httpSpy = TestBed.inject(HttpClient)
    const spy = spyOn(httpSpy, 'get').and.returnValue(of(data))
    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  });
});

describe('FlightListItemComponent2', () => {
  let component: FlightListItemComponent;
  let fixture: ComponentFixture<FlightListItemComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [FlightListItemComponent]
    })
      .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(FlightListItemComponent);
    component = fixture.componentInstance;
    jasmine.clock().mockDate(new Date('2022-02-22T01:01:01'));
    fixture.detectChanges();
  });

  it('should create and call http service on init', () => {
    const httpSpy = TestBed.inject(HttpClient);
    spyOn(component, 'checkToday').and.returnValue(true);
    const spy = spyOn(httpSpy, 'get').and.returnValue(of(data));
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});

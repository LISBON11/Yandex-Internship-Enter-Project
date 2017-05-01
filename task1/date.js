var cards = [
        {
            'from': 'point3',
            'to': 'point4',
            'transport': {
                'type': 'flight',
                'number': '12A',
                'seatNumber': '',
                'gate': ''
            },
            'baggage': {
                'transferPoint' : 'automatically'
            }
        },
        {
            'from': 'point4',
            'to': 'point7',
            'transport': {
                'type': 'bus',
                'number': '7822A',
                'seatNumber': '1',
                'gate': '123'
            },
            'baggage': {
                'transferPoint' : '344'
            }
        },
        {
            'from': 'point7',
            'to': 'point8',
            'transport': {
                'type': 'train',
                'number': '67',
                'seatNumber': '',
                'gate': ''
            },
            'baggage': {
                'transferPoint' : ''
            }
        },
        {
            'from': 'point8',
            'to': 'point9',
            'transport': {
                'type': 'flight',
                'number': '78A',
                'seatNumber': '1',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : 'automatically'
            }
        },
        {
            'from': 'point9',
            'to': 'point10',
            'transport': {
                'type': 'bus',
                'number': '78A',
                'seatNumber': '',
                'gate': ''
            },
            'baggage': {
                'transferPoint' : '344'
            }
        },
        {
            'from': 'point10',
            'to': 'point2',
            'transport': {
                'type': 'train',
                'number': 'B56',
                'seatNumber': '1',
                'gate': '79'
            },
            'baggage': {
                'transferPoint' : ''
            }
        },
        {
            'from': 'point2',
            'to': 'point3',
            'transport': {
                'type': 'flight',
                'number': '78A',
                'seatNumber': '',
                'gate': '566'
            },
            'baggage': {
                'transferPoint' : 'automatically'
            }
        },
        {
            'from': 'point5',
            'to': 'point6',
            'transport': {
                'type': 'bus',
                'number': '23C',
                'seatNumber': '1',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : '344'
            }
        },
        
        {
            'from': 'point4',
            'to': 'point5',
            'transport': {
                'type': 'train',
                'number': '767',
                'seatNumber': '',
                'gate': ''
            },
            'baggage': {
                'transferPoint' : ''
            }
        },
        {
            'from': 'point13',
            'to': 'point2',
            'transport': {
                'type': 'flight',
                'number': '89R',
                'seatNumber': '1',
                'gate': '44'
            },
            'baggage': {
                'transferPoint' : 'automatically'
            }
        },
        {
            'from': 'point2',
            'to': 'point1',
            'transport': {
                'type': 'bus',
                'number': '91C',
                'seatNumber': '',
                'gate': '88'
            },
            'baggage': {
                'transferPoint' : '344'
            }
        },
        {
            'from': 'point0',
            'to': 'point13',
            'transport': {
                'type': 'train',
                'number': '78A',
                'seatNumber': '',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : ''
            }
        },
        {
            'from': 'point6',
            'to': 'point4',
            'transport': {
                'type': 'flight',
                'number': 'I898',
                'seatNumber': '1',
                'gate': ''
            },
            'baggage': {
                'transferPoint' : 'automatically'
            }
        },
        {
            'from': 'point8',
            'to': 'point11',
            'transport': {
                'type': 'bus',
                'number': '89T',
                'seatNumber': '',
                'gate': '900'
            },
            'baggage': {
                'transferPoint' : '344'
            }
        },
        {
            'from': 'point11',
            'to': 'point12',
            'transport': {
                'type': 'train',
                'number': '555',
                'seatNumber': '1',
                'gate': '76'
            },
            'baggage': {
                'transferPoint' : ''
            }
        },
        {
            'from': 'point12',
            'to': 'point8',
            'transport': {
                'type': 'flight',
                'number': '13',
                'seatNumber': '',
                'gate': ''
            },
            'baggage': {
                'transferPoint' : 'automatically'
            }
        },
        {
            'from': 'point12',
            'to': 'point16',
            'transport': {
                'type': 'bus',
                'number': '14',
                'seatNumber': '1',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : '344'
            }
        },
        {
            'from': 'point16',
            'to': 'point14',
            'transport': {
                'type': 'train',
                'number': '44S',
                'seatNumber': '23',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : ''
            }
        },
        {
            'from': 'point14',
            'to': 'point6',
            'transport': {
                'type': 'flight',
                'number': '78A',
                'seatNumber': '56',
                'gate': ''
            },
            'baggage': {
                'transferPoint' : 'automatically'
            }
        },
        {
            'from': 'point6',
            'to': 'point12',
            'transport': {
                'type': 'bus',
                'number': '78A',
                'seatNumber': '',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : '344'
            }
        },
        {
            'from': 'point7',
            'to': 'point15',
            'transport': {
                'type': 'train',
                'number': '78A',
                'seatNumber': '77'
            },
            'baggage': {
                'transferPoint' : '',
                'gate': '12'
            }
        },
        {
            'from': 'point15',
            'to': 'point2',
            'transport': {
                'type': 'flight',
                'number': '78A',
                'seatNumber': '',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : 'automatically'
            }
        },
        {
            'from': 'point2',
            'to': 'point7',
            'transport': {
                'type': 'bus',
                'number': '78A',
                'seatNumber': '7U',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : '344'
            }
        },
        {
            'from': 'point11',
            'to': 'point12',
            'transport': {
                'type': 'train',
                'number': '78A',
                'seatNumber': '',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : ''
            }
        },
        {
            'from': 'point12',
            'to': 'point16',
            'transport': {
                'type': 'flight',
                'number': '78A',
                'seatNumber': '5C',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : 'automatically'
            }
        },
        {
            'from': 'point16',
            'to': 'point11',
            'transport': {
                'type': 'bus',
                'number': '78A',
                'seatNumber': '4',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : '344'
            }
        },
        {
            'from': 'point9',
            'to': 'point10',
            'transport': {
                'type': 'train',
                'number': '78A',
                'seatNumber': '',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : ''
            }
        },
        {
            'from':'point10',
            'to': 'point9',
            'transport': {
                'type': 'flight',
                'number': '78A',
                'seatNumber': '3',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : 'automatically'
            }
        },
        {
            'from': 'point0',
            'to': 'point13',
            'transport': {
                'type': 'bus',
                'number': '78A',
                'seatNumber': '2',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : '344'
            }
        },
        {
            'from':'point13',
            'to': 'point0',
            'transport': {
                'type': 'train',
                'number': '78A',
                'seatNumber': '1',
                'gate': '12'
            },
            'baggage': {
                'transferPoint' : ''
            }
        }
    ];
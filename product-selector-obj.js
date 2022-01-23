var productSelector = {
    products: {
        'dom-analog': {
            'available': false,
            'modelImage': '',
            'modelTitle': '',
            'modelDescription': '',
            'connections': [],
            'colorways': [],
            'resultModel': '',
        },
        'dom-dou-dz': {
            'available': true,
            'modelImage': '/images/dom_dou_sz.jpg',
            'modelTitle': 'Dometic DOU SZ',
            'modelDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie quis faucibus magna sagittis neque. Enim, suscipit nunc, interdum at bibendum duis et duis nibh.',
            'connections': [],
            'colorways': [
                {
                    'color': 'black',
                    'label': 'Black',
                    'part': 'ASY-350-X01'
                },
                {
                    'color': 'white',
                    'label': 'White',
                    'part': 'ASY-350-X02'
                }
            ],
            'resultModel': 'EasyTouch RV 350',
        },
        'dom-ct': {
            'available': true,
            'modelImage': '/images/dom-ct.jpg',
            'modelTitle': 'Dometic CT',
            'modelDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie quis faucibus magna sagittis neque. Enim, suscipit nunc, interdum at bibendum duis et duis nibh.',
            'connections': [],
            'colorways': [
                {
                    'color': 'black',
                    'label': 'Black',
                    'part': 'ASY-351-X01'
                },
                {
                    'color': 'white',
                    'label': 'White',
                    'part': 'ASY-351-X02'
                }
            ],
            'resultModel': 'EasyTouch RV 351',
        },
        'dom-sz-lcd': {
            'available': true,
            'modelImage': '/images/dom_sz_lcd.jpg',
            'modelTitle': 'Dometic SZ LCD',
            'modelDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie quis faucibus magna sagittis neque. Enim, suscipit nunc, interdum at bibendum duis et duis nibh.',
            'connections': [],
            'colorways': [
                {
                    'color': 'black',
                    'label': 'Black',
                    'part': 'ASY-351-X01'
                },
                {
                    'color': 'white',
                    'label': 'White',
                    'part': 'ASY-351-X02'
                }
            ],
            'resultModel': 'EasyTouch RV 351',
        },
        'dom-cc-dt': {
            'available': true,
            'modelImage': '/images/dom_cc_dt.jpg',
            'modelTitle': 'Dometic CC DT',
            'modelDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie quis faucibus magna sagittis neque. Enim, suscipit nunc, interdum at bibendum duis et duis nibh.',
            'connections': [],
            'colorways': [
                {
                    'color': 'black',
                    'label': 'Black',
                    'part': 'ASY-357-X01'
                },
                {
                    'color': 'white',
                    'label': 'White',
                    'part': 'ASY-357-X02'
                }
            ],
            'resultModel': 'EasyTouch RV 357',
        },
        'dom-cc-4btn': {
            'available': true,
            'modelImage': '/images/dom_cc_4btn.jpg',
            'modelTitle': 'Dometic CC 4BTN',
            'modelDescription': 'The 4 button thermostat IS NOT compatible UNLESS you upgrade the circuit board inside the air conditioner.  There are two compatible upgraded circuit boards, Dometic 3109229.009 or Dometic 3311557.000.  Google either of these part numbers & you will find them for sale.<br><br>Because this is a custom retrofit, we are unable to provide tech support on how to upgrade the board in your air conditioner.  Reach out to Dometic or your local RV repair shop if you are uncomfortable making this upgrade.  Once the upgraded board is installed the EasyTouch 357 will work great! 😊',
            'connections': [],
            'colorways': [],
            'resultModel': 'EasyTouch RV 357',
        },
        'cole-9000-zc': {
            'available': true,
            'modelImage': '/images/cole_9000-zc.jpg',
            'modelTitle': 'Coleman 9000 ZC',
            'modelDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie quis faucibus magna sagittis neque. Enim, suscipit nunc, interdum at bibendum duis et duis nibh.',
            'connections': [
                {
                    'connection': 'clip',
                    'label': 'Clip',
                    'model': 'EasyTouch RV 355'
                },
                {
                    'connection': 'wired',
                    'label': 'Wired',
                    'model': 'EasyTouch RV 355C'
                },
                {
                    'connection': 'not-sure',
                    'label': 'Not Sure',
                    'model': 'EasyTouch RV 355C'
                }
            ],
            'colorways': [
                {
                    'color': 'black',
                    'label': 'Black',
                    'part': 'ASY-355-X01'
                },
                {
                    'color': 'white',
                    'label': 'White',
                    'part': 'ASY-355-X02'
                }
            ],
            'resultModel': 'EasyTouch RV 355',
        },
        'cole-tslide-12vdc': {
            'available': true,
            'modelImage': '/images/cole_tslide_12vdc.jpg',
            'modelTitle': 'Dometic TSLIDE 12VDC',
            'modelDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie quis faucibus magna sagittis neque. Enim, suscipit nunc, interdum at bibendum duis et duis nibh.',
            'connections': [],
            'colorways': [
                {
                    'color': 'black',
                    'label': 'Black',
                    'part': 'ASY-352-X01'
                },
                {
                    'color': 'white',
                    'label': 'White',
                    'part': 'ASY-352-X02'
                }
            ],
            'resultModel': 'EasyTouch RV 352',
        },
        'cole-mzzc8000-horz': {
            'available': true,
            'modelImage': '/images/cole_mzzc8000-horz.jpg',
            'modelTitle': 'Coleman MZZC8000 HORZ',
            'modelDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie quis faucibus magna sagittis neque. Enim, suscipit nunc, interdum at bibendum duis et duis nibh.',
            'connections': [
                {
                    'connection': 'clip',
                    'label': 'Clip',
                    'model': 'EasyTouch RV 354'
                },
                {
                    'connection': 'wired',
                    'label': 'Wired',
                    'model': 'EasyTouch RV 354C'
                },
                {
                    'connection': 'not-sure',
                    'label': 'Not Sure',
                    'model': 'EasyTouch RV 354C'
                }
            ],
            'colorways': [
                {
                    'color': 'black',
                    'label': 'Black',
                    'part': 'ASY-354-X01'
                },
                {
                    'color': 'white',
                    'label': 'White',
                    'part': 'ASY-354-X02'
                }
            ],
            'resultModel': '',
        },
        'cole-sshphcac-vert': {
            'available': true,
            'modelImage': 'cole_sshphcac-vert.jpg',
            'modelTitle': 'Coleman Single Zone',
            'modelDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie quis faucibus magna sagittis neque. Enim, suscipit nunc, interdum at bibendum duis et duis nibh.',
            'connections': [
                {
                    'connection': 'clip',
                    'label': 'Clip',
                    'model': 'EasyTouch RV 352C'
                },
                {
                    'connection': 'push',
                    'label': 'Gray Push',
                    'model': 'EasyTouch RV 352'
                },
                {
                    'connection': 'not-sure',
                    'label': 'Not Sure',
                    'model': 'EasyTouch RV 352C'
                }
            ],
            'colorways': [
                {
                    'color': 'black',
                    'label': 'Black',
                    'part': 'ASY-352-X01'
                },
                {
                    'color': 'white',
                    'label': 'White',
                    'part': 'ASY-352-X02'
                }
            ],
            'resultModel': '',
        },
        'cole-2btn-hp': {
            'available': true,
            'modelImage': '/images/cole-2btn-hp.jpg',
            'modelTitle': 'RVComfort HP, HC, AC Models',
            'modelDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie quis faucibus magna sagittis neque. Enim, suscipit nunc, interdum at bibendum duis et duis nibh.',
            'connections': [
                {
                    'connection': 'clip',
                    'label': 'Clip',
                    'model': 'EasyTouch RV 352'
                },
                {
                    'connection': 'wired',
                    'label': 'Wired',
                    'model': 'EasyTouch RV 352C'
                }
            ],
            'colorways': [
                {
                    'color': 'black',
                    'label': 'Black',
                    'part': 'ASY-352-X03'
                },
                {
                    'color': 'white',
                    'label': 'White',
                    'part': 'ASY-352-X04'
                }
            ],
            'resultModel': '',
        },
        'cole-2btn-php': {
            'available': false,
            'modelImage': '',
            'modelTitle': '',
            'modelDescription': '',
            'connections': [],
            'colorways': [],
            'resultModel': '',
        },
    }
};
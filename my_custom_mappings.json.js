{
  "title": "Tye Tartarus v2.json",
  "maintainers": ["tyeraymond-design"],
  "rules": [
    {
      "description": "Razer 01 to Undo",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "1" },
          "to": [
            { "key_code": "z", "modifiers": ["left_command"] }
          ]
        }
      ]
    },
    {
      "description": "Razer 02 to Redo",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "2" },
          "to": [
            { "key_code": "z", "modifiers": ["left_shift", 
"left_command"] }
          ]
        }
      ]
    },
   {
      "description": "Razer 03 to switch colors",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "3" },
          "to": [
            { "key_code": "x" }
          ]
        }
      ]
    },
    {
      "description": "Razer 04 to Brush",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "4" },
          "to": [
            { "key_code": "b" }
          ]
        }
      ]
    },
    {
      "description": "Razer 05 to Lasso",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "5" },
          "to": [
            { "key_code": "l" }
          ]
        }
      ]
    },
    {
      "description": "Razer 06 to Decrease Brush",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "tab" },
          "to": [
            { "key_code": "open_bracket" }
          ]
        }
      ]
    },
    {
      "description": "Razer 07 to Increase Brush",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "q" },
          "to": [
            { "key_code": "close_bracket" }
          ]
        }
      ]
    },
    {
      "description": "Razer 08 to Move Canvas",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "w" },
          "to": [
            { "key_code": "spacebar" }
          ]
        }
      ]
    },
  {
      "description": "Razer 09 to eraser",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "e" },
          "to": [
            { "key_code": "e" }
          ]
        }
      ]
    },
    {
      "description": "Razer 10 to X Rotate",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "r" },
          "to": [
            { "key_code": "r" }
          ]
        }
      ]
    },
    {
      "description": "Razer 11 to Crop",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "caps_lock" },
          "to": [
            { "key_code": "c" }
          ]
        }
      ]
    },
    {
      "description": "Razer 12 to eye dropper",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "a" },
          "to": [
            { "key_code": "i" }
          ]
        }
      ]
    },
    {
      "description": "Razer 13 to lock layer",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "s" },
          "to": [
            { "key_code": "slash" }
          ]
        }
      ]
    },
    {
      "description": "Razer 14 to Clipping mask",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "d" },
          "to": [
            { "key_code": "g", "modifiers": ["left_command", 
"left_option"] }
          ]
        }
      ]
    },
    {
      "description": "Razer 15 to Select object",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "f" },
          "to": [
            { "key_code": "t", "modifiers": ["left_command"] }
          ]
        }
      ]
    },
    {

    {
      "description": "Razer shift to touch trackpad with two fingers",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "product_id": 580,
                  "vendor_id": 5426
                },
                {
                  "product_id": 555,
                  "vendor_id": 5426
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "shift"
          },
          "to": [
            {
              "key_code": "spacebar",
              "modifiers": [
                "left_option",
                "left_command"
              ]
            }
          ]
        }
      ]
    },
    {
  "description": "Razer 17 to apply color",
  "manipulators": [
    {
      "conditions": [
        {
          "type": "device_if",
          "identifiers": [
            {
              "product_id": 580,
              "vendor_id": 5426
            },
            {
              "product_id": 555,
              "vendor_id": 5426
            }
          ]
        }
      ],
      "type": "basic",
      "from": {
        "key_code": "z"
      },
      "to": [
        {
          "key_code": "delete_or_backspace",
          "modifiers": [
            "left_shift",
            "left_option"
          ]
        }
      ]
    }
  ]
},
    {
      "description": "Razer 18 to copy",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "product_id": 580,
                  "vendor_id": 5426
                },
                {
                  "product_id": 555,
                  "vendor_id": 5426
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "x"
          },
          "to": [
            {
              "key_code": "c",
              "modifiers": [
                "left_command"
              ]
            }
          ]
        }
      ]
    },
    {
      "description": "Razer 19 to paste",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "product_id": 580,
                  "vendor_id": 5426
                },
                {
                  "product_id": 555,
                  "vendor_id": 5426
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "c"
          },
          "to": [
            {
              "key_code": "v",
              "modifiers": [
                "left_command"
              ]
            }
          ]
        }
      ]
    },
    {
      "description": "Razer Trigger to Zoom In",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "product_id": 580,
                  "vendor_id": 5426
                },
                {
                  "product_id": 555,
                  "vendor_id": 5426
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "left_option"
          },
          "to": [
            {
              "key_code": "equal_sign"
            }
          ]
        }
      ]
    },
    {
      "description": "Razer Trigger to Zoom Out",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "product_id": 580,
                  "vendor_id": 5426
                },
                {
                  "product_id": 555,
                  "vendor_id": 5426
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "left_command"
          },
          "to": [
            {
              "key_code": "hyphen"
            }
          ]
        }
      ]
    }
  ]
}{
  "title": "Tye Tartarus v2.json",
  "maintainers": ["tyeraymond-design"],
  "rules": [
    {
      "description": "Razer 01 to Undo",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "1" },
          "to": [
            { "key_code": "z", "modifiers": ["left_command"] }
          ]
        }
      ]
    },
    {
      "description": "Razer 02 to Redo",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "2" },
          "to": [
            { "key_code": "z", "modifiers": ["left_shift", 
"left_command"] }
          ]
        }
      ]
    },
   {
      "description": "Razer 03 to switch colors",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "3" },
          "to": [
            { "key_code": "x" }
          ]
        }
      ]
    },
    {
      "description": "Razer 04 to Brush",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "4" },
          "to": [
            { "key_code": "b" }
          ]
        }
      ]
    },
    {
      "description": "Razer 05 to Lasso",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "5" },
          "to": [
            { "key_code": "l" }
          ]
        }
      ]
    },
    {
      "description": "Razer 06 to Decrease Brush",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "tab" },
          "to": [
            { "key_code": "open_bracket" }
          ]
        }
      ]
    },
    {
      "description": "Razer 07 to Increase Brush",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "q" },
          "to": [
            { "key_code": "close_bracket" }
          ]
        }
      ]
    },
    {
      "description": "Razer 08 to Move Canvas",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "w" },
          "to": [
            { "key_code": "spacebar" }
          ]
        }
      ]
    },
  {
      "description": "Razer 09 to eraser",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "e" },
          "to": [
            { "key_code": "e" }
          ]
        }
      ]
    },
    {
      "description": "Razer 10 to X Rotate",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "r" },
          "to": [
            { "key_code": "r" }
          ]
        }
      ]
    },
    {
      "description": "Razer 11 to Crop",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "caps_lock" },
          "to": [
            { "key_code": "c" }
          ]
        }
      ]
    },
    {
      "description": "Razer 12 to eye dropper",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "a" },
          "to": [
            { "key_code": "i" }
          ]
        }
      ]
    },
    {
      "description": "Razer 13 to lock layer",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "s" },
          "to": [
            { "key_code": "slash" }
          ]
        }
      ]
    },
    {
      "description": "Razer 14 to Clipping mask",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "d" },
          "to": [
            { "key_code": "g", "modifiers": ["left_command", 
"left_option"] }
          ]
        }
      ]
    },
    {
      "description": "Razer 15 to Select object",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                { "product_id": 580, "vendor_id": 5426 },
                { "product_id": 555, "vendor_id": 5426 }
              ]
            }
          ],
          "type": "basic",
          "from": { "key_code": "f" },
          "to": [
            { "key_code": "t", "modifiers": ["left_command"] }
          ]
        }
      ]
    },
    {

    {
      "description": "Razer shift to touch trackpad with two fingers",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "product_id": 580,
                  "vendor_id": 5426
                },
                {
                  "product_id": 555,
                  "vendor_id": 5426
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "shift"
          },
          "to": [
            {
              "key_code": "spacebar",
              "modifiers": [
                "left_option",
                "left_command"
              ]
            }
          ]
        }
      ]
    },
    {
  "description": "Razer 17 to apply color",
  "manipulators": [
    {
      "conditions": [
        {
          "type": "device_if",
          "identifiers": [
            {
              "product_id": 580,
              "vendor_id": 5426
            },
            {
              "product_id": 555,
              "vendor_id": 5426
            }
          ]
        }
      ],
      "type": "basic",
      "from": {
        "key_code": "z"
      },
      "to": [
        {
          "key_code": "delete_or_backspace",
          "modifiers": [
            "left_shift",
            "left_option"
          ]
        }
      ]
    }
  ]
},
    {
      "description": "Razer 18 to copy",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "product_id": 580,
                  "vendor_id": 5426
                },
                {
                  "product_id": 555,
                  "vendor_id": 5426
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "x"
          },
          "to": [
            {
              "key_code": "c",
              "modifiers": [
                "left_command"
              ]
            }
          ]
        }
      ]
    },
    {
      "description": "Razer 19 to paste",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "product_id": 580,
                  "vendor_id": 5426
                },
                {
                  "product_id": 555,
                  "vendor_id": 5426
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "c"
          },
          "to": [
            {
              "key_code": "v",
              "modifiers": [
                "left_command"
              ]
            }
          ]
        }
      ]
    },
    {
      "description": "Razer Trigger to Zoom In",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "product_id": 580,
                  "vendor_id": 5426
                },
                {
                  "product_id": 555,
                  "vendor_id": 5426
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "left_option"
          },
          "to": [
            {
              "key_code": "equal_sign"
            }
          ]
        }
      ]
    },
    {
      "description": "Razer Trigger to Zoom Out",
      "manipulators": [
        {
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "product_id": 580,
                  "vendor_id": 5426
                },
                {
                  "product_id": 555,
                  "vendor_id": 5426
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "left_command"
          },
          "to": [
            {
              "key_code": "hyphen"
            }
          ]
        }
      ]
    }
  ]
}

// 
my_custom_mappings.json.js
const complexModifications = {
  title: 'My Custom Mappings',
  rules: [
    {
      description: 'Remap key D to create new group',
      manipulators: [
        {
          type: 'basic',
          from: { key_code: 'd' },
          to: [{ key_code: 'command+option+G' }]
        }
      ]
    },
    {
      description: 'Remap key F to New layer',
      manipulators: [
        {
          type: 'basic',
          from: { key_code: 'f' },
          to: [{ key_code: 'control+j' }]
        }
      ]
    },
    {
      description: 'Remap key Z to Command+T',
      manipulators: [
        {
          type: 'basic',
          from: { key_code: 'z' },
          to: [{ key_code: 'command+t' }]
        }
      ]
    }
  ]
};

// Export the configuration
module.exports = complexModifications;

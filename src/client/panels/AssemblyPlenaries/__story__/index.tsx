import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import AssemblyPlenaries from '../AssemblyPlenaries';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Panel', module);
stories.addDecorator(withKnobs);

stories.add('AssemblyPlenaries', () => {
    const data = {
        loading: false,
        error: undefined,
        "plenaries": [
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-04-11 10:30",
                "id": 94,
                "name": "94. fundur",
                "to": "2019-04-11 20:15"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-04-10 19:42",
                "id": 93,
                "name": "93. fundur",
                "to": "2019-04-10 23:15"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-04-10 15:00",
                "id": 92,
                "name": "92. fundur",
                "to": "2019-04-10 19:41"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-04-09 13:31",
                "id": 91,
                "name": "91. fundur",
                "to": "2019-04-10 00:39"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-04-08 16:40",
                "id": 90,
                "name": "90. fundur",
                "to": "2019-04-08 19:36"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-04-08 15:01",
                "id": 89,
                "name": "89. fundur",
                "to": "2019-04-08 16:39"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-04-02 13:30",
                "id": 88,
                "name": "88. fundur",
                "to": "2019-04-02 23:37"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-04-01 15:00",
                "id": 87,
                "name": "87. fundur",
                "to": "2019-04-01 21:46"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-28 10:30",
                "id": 86,
                "name": "86. fundur",
                "to": "2019-03-28 12:01"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-27 13:30",
                "id": 85,
                "name": "85. fundur",
                "to": "2019-03-27 23:52"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-26 13:30",
                "id": 84,
                "name": "84. fundur",
                "to": "2019-03-26 22:56"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-25 15:00",
                "id": 83,
                "name": "83. fundur",
                "to": "2019-03-25 18:09"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-21 10:30",
                "id": 82,
                "name": "82. fundur",
                "to": "2019-03-21 18:14"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-20 15:01",
                "id": 81,
                "name": "81. fundur",
                "to": "2019-03-20 18:21"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-19 13:31",
                "id": 80,
                "name": "80. fundur",
                "to": "2019-03-19 22:07"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-18 14:02",
                "id": 79,
                "name": "79. fundur",
                "to": "2019-03-18 16:56"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-11 15:02",
                "id": 78,
                "name": "78. fundur",
                "to": "2019-03-11 18:35"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-07 10:30",
                "id": 77,
                "name": "77. fundur",
                "to": "2019-03-07 16:19"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-06 15:00",
                "id": 76,
                "name": "76. fundur",
                "to": "2019-03-06 19:53"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-05 13:30",
                "id": 75,
                "name": "75. fundur",
                "to": "2019-03-05 19:04"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-04 15:00",
                "id": 74,
                "name": "74. fundur",
                "to": "2019-03-04 17:52"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-03-01 10:31",
                "id": 73,
                "name": "73. fundur",
                "to": "2019-03-01 16:47"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-02-28 10:30",
                "id": 72,
                "name": "72. fundur",
                "to": "2019-02-28 18:38"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-02-27 15:00",
                "id": 71,
                "name": "71. fundur",
                "to": "2019-02-27 20:19"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-02-26 13:31",
                "id": 70,
                "name": "70. fundur",
                "to": "2019-02-27 05:21"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-02-21 10:31",
                "id": 69,
                "name": "69. fundur",
                "to": "2019-02-21 18:39"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-02-20 15:00",
                "id": 68,
                "name": "68. fundur",
                "to": "2019-02-20 19:23"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-02-19 13:30",
                "id": 67,
                "name": "67. fundur",
                "to": "2019-02-19 20:14"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-02-18 15:01",
                "id": 66,
                "name": "66. fundur",
                "to": "2019-02-18 18:14"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-02-07 14:23",
                "id": 65,
                "name": "65. fundur",
                "to": "2019-02-07 17:07"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-02-07 10:31",
                "id": 64,
                "name": "64. fundur",
                "to": "2019-02-07 14:21"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-02-06 15:00",
                "id": 63,
                "name": "63. fundur",
                "to": "2019-02-06 21:46"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-02-05 13:30",
                "id": 62,
                "name": "62. fundur",
                "to": "2019-02-05 23:44"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-02-04 15:01",
                "id": 61,
                "name": "61. fundur",
                "to": "2019-02-04 18:07"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-01-31 10:30",
                "id": 60,
                "name": "60. fundur",
                "to": "2019-01-31 16:12"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-01-30 15:00",
                "id": 59,
                "name": "59. fundur",
                "to": "2019-01-30 19:37"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-01-29 13:31",
                "id": 58,
                "name": "58. fundur",
                "to": "2019-01-29 19:43"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-01-24 10:32",
                "id": 57,
                "name": "57. fundur",
                "to": "2019-01-24 17:53"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-01-23 15:00",
                "id": 56,
                "name": "56. fundur",
                "to": "2019-01-23 19:35"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-01-22 13:31",
                "id": 55,
                "name": "55. fundur",
                "to": "2019-01-22 16:02"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2019-01-21 15:03",
                "id": 54,
                "name": "54. fundur",
                "to": "2019-01-21 19:16"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-14 16:11",
                "id": 53,
                "name": "53. fundur",
                "to": "2018-12-14 16:23"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-14 15:08",
                "id": 52,
                "name": "52. fundur",
                "to": "2018-12-14 16:10"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-14 10:31",
                "id": 51,
                "name": "51. fundur",
                "to": "2018-12-14 15:06"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-13 15:02",
                "id": 50,
                "name": "50. fundur",
                "to": "2018-12-13 20:49"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-13 10:31",
                "id": 49,
                "name": "49. fundur",
                "to": "2018-12-13 15:01"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-12 15:00",
                "id": 48,
                "name": "48. fundur",
                "to": "2018-12-12 20:18"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-11 15:50",
                "id": 47,
                "name": "47. fundur",
                "to": "2018-12-11 23:18"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-11 13:30",
                "id": 46,
                "name": "46. fundur",
                "to": "2018-12-11 15:48"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-10 17:58",
                "id": 45,
                "name": "45. fundur",
                "to": "2018-12-10 23:52"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-10 15:02",
                "id": 44,
                "name": "44. fundur",
                "to": "2018-12-10 17:57"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-07 10:32",
                "id": 43,
                "name": "43. fundur",
                "to": "2018-12-07 17:15"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-05 15:00",
                "id": 42,
                "name": "42. fundur",
                "to": "2018-12-05 21:10"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-04 13:32",
                "id": 41,
                "name": "41. fundur",
                "to": "2018-12-04 20:43"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-12-03 15:01",
                "id": 40,
                "name": "40. fundur",
                "to": "2018-12-03 18:53"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-27 13:31",
                "id": 39,
                "name": "39. fundur",
                "to": "2018-11-27 23:56"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-26 15:00",
                "id": 38,
                "name": "38. fundur",
                "to": "2018-11-27 00:03"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-23 10:01",
                "id": 37,
                "name": "37. fundur",
                "to": "2018-11-23 12:15"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-22 10:31",
                "id": 36,
                "name": "36. fundur",
                "to": "2018-11-22 18:46"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-21 15:00",
                "id": 35,
                "name": "35. fundur",
                "to": "2018-11-21 19:44"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-20 13:32",
                "id": 34,
                "name": "34. fundur",
                "to": "2018-11-20 21:36"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-19 15:00",
                "id": 33,
                "name": "33. fundur",
                "to": "2018-11-20 00:22"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-15 10:30",
                "id": 32,
                "name": "32. fundur",
                "to": "2018-11-16 00:06"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-14 15:01",
                "id": 31,
                "name": "31. fundur",
                "to": "2018-11-14 19:48"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-12 15:04",
                "id": 30,
                "name": "30. fundur",
                "to": "2018-11-12 17:10"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-08 10:31",
                "id": 29,
                "name": "29. fundur",
                "to": "2018-11-08 19:07"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-07 15:00",
                "id": 28,
                "name": "28. fundur",
                "to": "2018-11-07 19:47"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-06 13:30",
                "id": 27,
                "name": "27. fundur",
                "to": "2018-11-06 19:49"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-11-05 15:00",
                "id": 26,
                "name": "26. fundur",
                "to": "2018-11-05 17:44"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-25 10:31",
                "id": 25,
                "name": "25. fundur",
                "to": "2018-10-26 00:55"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-24 13:30",
                "id": 24,
                "name": "24. fundur",
                "to": "2018-10-24 14:56"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-23 13:30",
                "id": 23,
                "name": "23. fundur",
                "to": "2018-10-23 23:24"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-18 10:30",
                "id": 22,
                "name": "22. fundur",
                "to": "2018-10-18 19:38"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-17 15:01",
                "id": 21,
                "name": "21. fundur",
                "to": "2018-10-17 18:20"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-16 13:30",
                "id": 20,
                "name": "20. fundur",
                "to": "2018-10-16 19:50"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-15 15:01",
                "id": 19,
                "name": "19. fundur",
                "to": "2018-10-15 17:31"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-11 10:31",
                "id": 18,
                "name": "18. fundur",
                "to": "2018-10-11 16:44"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-10 15:01",
                "id": 17,
                "name": "17. fundur",
                "to": "2018-10-10 19:34"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-09 23:06",
                "id": 16,
                "name": "16. fundur",
                "to": "2018-10-09 23:26"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-09 22:25",
                "id": 15,
                "name": "15. fundur",
                "to": "2018-10-09 23:04"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-09 14:33",
                "id": 14,
                "name": "14. fundur",
                "to": "2018-10-09 22:22"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-10-09 13:31",
                "id": 13,
                "name": "13. fundur",
                "to": "2018-10-09 14:31"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-09-27 10:30",
                "id": 12,
                "name": "12. fundur",
                "to": "2018-09-27 19:56"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-09-26 15:00",
                "id": 11,
                "name": "11. fundur",
                "to": "2018-09-26 19:40"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-09-25 13:31",
                "id": 10,
                "name": "10. fundur",
                "to": "2018-09-25 15:14"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-09-24 15:01",
                "id": 9,
                "name": "9. fundur",
                "to": "2018-09-24 19:21"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-09-20 10:31",
                "id": 8,
                "name": "8. fundur",
                "to": "2018-09-20 16:06"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-09-19 15:01",
                "id": 7,
                "name": "7. fundur",
                "to": "2018-09-19 19:40"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-09-18 13:31",
                "id": 6,
                "name": "6. fundur",
                "to": "2018-09-18 19:02"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-09-17 15:03",
                "id": 5,
                "name": "5. fundur",
                "to": "2018-09-17 19:58"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-09-14 09:31",
                "id": 4,
                "name": "4. fundur",
                "to": "2018-09-14 22:58"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-09-13 10:30",
                "id": 3,
                "name": "3. fundur",
                "to": "2018-09-13 17:14"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-09-12 19:30",
                "id": 2,
                "name": "2. fundur",
                "to": "2018-09-12 22:07"
            },
            {
                "__typename": "Plenary",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "from": "2018-09-11 16:00",
                "id": 1,
                "name": "framhald þingsetningarfundar",
                "to": "2018-09-11 16:15"
            }
        ],
        "assemblyProperties": {
            "assembly": {
                "__typename": "Assembly",
                "cabinet": {
                    "__typename": "Cabinet",
                    "period": {
                        "__typename": "Period",
                        "from": "2017-11-30",
                        "to": null
                    },
                    "title": "Ráðuneyti Katrínar Jakobsdóttur"
                },
                "division": {
                    "__typename": "Division",
                    "majority": [],
                    "minority": [
                        {
                            "__typename": "Party",
                            "color": "8ec83e"
                        },
                        {
                            "__typename": "Party",
                            "color": null
                        },
                        {
                            "__typename": "Party",
                            "color": "488e41"
                        },
                        {
                            "__typename": "Party",
                            "color": "00adef"
                        },
                        {
                            "__typename": "Party",
                            "color": "da2128"
                        },
                        {
                            "__typename": "Party",
                            "color": "522c7f"
                        },
                        {
                            "__typename": "Party",
                            "color": "f6a71d"
                        },
                        {
                            "__typename": "Party",
                            "color": "EE4D9B"
                        },
                        {
                            "__typename": "Party",
                            "color": "199094"
                        }
                    ]
                },
                "id": 149,
                "period": {
                    "__typename": "Period",
                    "from": "2018-09-11",
                    "to": null
                }
            }
        }
    };

    return (
        <div>
            <Router>
                <AssemblyPlenaries {...data as any} />
            </Router>
        </div>
    )
});

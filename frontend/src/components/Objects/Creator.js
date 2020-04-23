import React, {Component} from "react";

import styles from './Game.module.scss';


class Creator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: [
                {
                    x: 1,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 2,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 3,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 4,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 5,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 6,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 7,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 8,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 9,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 10,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 11,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 12,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 13,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 14,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 15,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 16,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 17,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 18,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 19,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 20,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },








                {
                    x: 1,
                    y: 2,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 2,
                    y: 2,
                    type: "tree",
                    object: null,
                    passable: false
                },

                {
                    x: 3,
                    y: 2,
                    type: "flower",
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 2,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 6,
                    y: 2,
                    type: "tree",
                    object: null,
                    passable: false
                },

                {
                    x: 7,
                    y: 2,
                    type: "tree",
                    object: null,
                    passable: false
                },

                {
                    x: 8,
                    y: 2,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 9,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 2,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 12,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 2,
                    type: "flower",
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 2,
                    type: "box",
                    object: null,
                    passable: false
                },

                {
                    x: 15,
                    y: 2,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 16,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 2,
                    type: "tree",
                    object: null,
                    passable: false
                },

                {
                    x: 19,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 2,
                    type: "wall",
                    object: null,
                    passable: false
                },






                {
                    x: 1,
                    y: 3,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 2,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 3,
                    type: "wall",
                    object: null,
                    passable: false
                },










                {
                    x: 1,
                    y: 4,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 2,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 4,
                    type: "wall",
                    object: null,
                    passable: false
                },








                {
                    x: 1,
                    y: 5,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 2,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 5,
                    type: "wall",
                    object: null,
                    passable: false
                },











                {
                    x: 1,
                    y: 6,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 2,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 6,
                    type: "wall",
                    object: null,
                    passable: false
                },











                {
                    x: 1,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 2,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },












                {
                    x: 1,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 2,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },










                {
                    x: 1,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 2,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },











                {
                    x: 1,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 2,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y:  10,
                    type: null,
                    object: null,
                    passable: true
                },
            ],
            player: {
                positionX: 5,
                positionY: 5
            },
            levelSize: {
                width: 20,
                height: 10,
            },
            checkedElemParams: {
                type: "ничего",
                object: null,
                passable: true
            }
        };

        this.setLevelSize = this.setLevelSize.bind(this)
    }

    setLevelSize(e) {
        const type = e.target.dataset.type;
        const value = +e.target.value;

        this.setState({
            levelSize: {
                ...this.state.levelSize,
                [type]: value
            }
        }, function () {
            this.generateLevel()
        })
    }

    generateLevel() {
        const {width, height} = this.state.levelSize;
        let newLevel = [];

        let posY = 0;
        let posX = 0;

        for (let i = 0; i  < width * (height + 1); i++) {
            if (posX >= width) {
                posX = 1;
                posY++;
            }  else {
                posX++;
            }

            newLevel.push({
                x: posX,
                y: posY,
                type: null,
                object: null,
                passable: true
            })
        }

        this.setState({
            level: newLevel
        })
    }

    setActiveType(type, object, passable) {
        this.setState({
            checkedElemParams: {
                type: type,
                object: object,
                passable: passable
            }
        })
    }

    changeField(e) {
        const posX = +e.target.dataset.x;
        const posY = +e.target.dataset.y;
        const {checkedElemParams: {type, object, passable},  level} = this.state;

        let newLevel = this.state.level;
        let changedFieldIndex = 0;

        level.forEach((item, index) => {
            if (item.y === posY && item.x === posX) {
                changedFieldIndex= index;
            }
        });

        newLevel[changedFieldIndex].type = type;
        newLevel[changedFieldIndex].object = object;
        newLevel[changedFieldIndex].passable = passable;

        this.setState({
            level: newLevel
        });

        console.log(JSON.stringify(newLevel))
    }

    render() {
        const {level, player, checkedElemParams} = this.state;
        let elements = [];

        level.forEach((field, index) => {
            const fielsBaseClass = `${styles.field} ${styles.creator_field}`;
            const fieldTypeClass = styles[field.type];
            const fieldObjectClass = styles[field.object];

            let playerClass = null;
            if (field.x === player.positionX && field.y === player.positionY)  {
                playerClass = styles.player;
            }

            const fieldFinalClass = `${fielsBaseClass} ${fieldTypeClass} ${fieldObjectClass} ${playerClass}`;

            elements.push(
                <div
                    key={index}
                    className={fieldFinalClass}
                    data-x={field.x}
                    data-y={field.y}
                    data-passible={field.passable}
                    onClick={this.changeField.bind(this)}
                />
            )
        });

        const levelWidth = this.state.levelSize.width * 40 + "px";
        const levelHeight = this.state.levelSize.height * 40 + "px";

        let wrapperStyles  = {
            width: levelWidth,
            height: levelHeight
        };


        let content = (
            <div>
                <div className={styles.creator_elements}>
                    <h2 className={styles.creator_title}>Тип поля:</h2>
                    <ul className={styles.creator_elements_list}>
                        <li>
                            <button
                                className={styles.wall}
                                onClick={this.setActiveType.bind(this, "wall", null, false)}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.tree}
                                onClick={this.setActiveType.bind(this, "tree", null, false)}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.flower}
                                onClick={this.setActiveType.bind(this, "flower", null, true)}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.sand}
                                onClick={this.setActiveType.bind(this, "sand", null, true)}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.river}
                                onClick={this.setActiveType.bind(this, "river", null, false)}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.door}
                                onClick={this.setActiveType.bind(this, "door", null, false)}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.box}
                                onClick={this.setActiveType.bind(this, "box", null, false)}
                            />
                        </li>
                
                        <li>
                            <button
                                className={styles.exit}
                                onClick={this.setActiveType.bind(this, "exit", null, true)}
                            />
                        </li>
                        <li>
                            <button
                                className={styles.field}
                                onClick={this.setActiveType.bind(this, null, null, true)}
                            />
                        </li>
                    </ul>
                    <h2 className={styles.creator_title}>Объекты:</h2>
                    <ul className={styles.creator_elements_list}>
                        <li>
                            <button
                                data-type="keys"
                                className={styles.keys}
                                onClick={this.setActiveType.bind(this, null, "keys", true)}
                            ></button>
                        </li>
                    </ul>
                    <h2 className={styles.creator_title}>Выбрано: {checkedElemParams.type}</h2>
                </div>
        
                <div
                    className={styles.wrapper}
                    style={wrapperStyles}
                >
                    {elements}
                </div>
          
            </div>
        )

        return (
            <div className={styles.creator}>
                {content}
            </div>
        )
    }
}

export default Creator;
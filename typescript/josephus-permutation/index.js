"\nThis problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.\n\nRefusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).\n\nWell, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.\n\nYou are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.\n\nTips and notes: it helps to start counting from 1 up to n, instead of the usual range 0 to n-1; k will always be >=1.\n\nFor example, with an array=[1,2,3,4,5,6,7] and k=3, the function should act this way.\n\n[1,2,3,4,5,6,7] - initial sequence\n[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]\n[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]\n[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]\n[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]\n[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]\n[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]\n[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]\nSo our final result is:\n\n[3,6,2,7,5,1,4]\n";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.josephus = void 0;
var josephus = function (items, k) {
    var informationalItems = items.map(function (val) {
        return {
            value: val,
            active: true
        };
    });
    var josephusSequence = [];
    var totalItems = informationalItems.length;
    var index = k - 1 || 0;
    var counter = 0;
    console.log(informationalItems);
    while (josephusSequence.length != totalItems) {
        if (counter == 0 && informationalItems[index].active) {
            josephusSequence.push(informationalItems[index].value);
            informationalItems[index].active = false;
            counter = k - 1;
            continue;
        }
        if (informationalItems[index].active) {
            counter -= 1;
        }
        index = (index + 1) % totalItems;
    }
    console.log(josephusSequence);
    return josephusSequence;
};
exports.josephus = josephus;
(0, exports.josephus)([1, 2, 3, 4, 5, 6, 7], 3);

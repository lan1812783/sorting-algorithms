var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var generateRandomArray = function (size, low, up) {
    if (size === void 0) { size = numOfBars; }
    if (low === void 0) { low = lowerBound; }
    if (up === void 0) { up = upperBound; }
    var array = [];
    for (var i = 0; i < size; i++)
        array.push(Math.floor(Math.random() * (up - low) + low));
    return array;
};
var setup = function () {
    var container = document.querySelector(".container");
    if (container.innerHTML)
        container.innerHTML = "";
    container.style.height = upperBound * heightOfOneUnit + "rem";
    for (var i = 0; i < array.length; i++) {
        var bar = document.createElement("div");
        bar.style.margin = "0.05rem";
        bar.style.width = width + "rem";
        bar.style.height = array[i] * heightOfOneUnit + "rem";
        bar.style.display = "inline-block";
        bar.style.backgroundColor = barBgColor;
        bar.style.borderRadius = "5px";
        bar.style.border = "1px solid " + barBorderColor;
        container.appendChild(bar);
    }
};
var drawBars = function (low, high, idx) {
    if (low === void 0) { low = -1; }
    if (high === void 0) { high = -1; }
    if (idx === void 0) { idx = -1; }
    var allBars = document.querySelectorAll(".container div");
    for (var i = 0; i < array.length; i++) {
        if (i === low)
            allBars[i].style.backgroundColor = lowColor;
        else if (i === high)
            allBars[i].style.backgroundColor = highColor;
        else if (i === idx)
            allBars[i].style.backgroundColor = idxColor;
        else
            allBars[i].style.backgroundColor = barBgColor;
        allBars[i].style.height = array[i] * heightOfOneUnit + "rem";
    }
};
var delay = function () { return new Promise(function (res) { return setTimeout(res, delayDuration); }); };
var swap = function (i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};
var bubbleSort = function () { return __awaiter(_this, void 0, void 0, function () {
    var isSwap, lastIdx, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                isSwap = true;
                lastIdx = array.length - 1;
                _a.label = 1;
            case 1:
                if (!isSwap) return [3 /*break*/, 7];
                isSwap = false;
                i = 1;
                _a.label = 2;
            case 2:
                if (!(i <= lastIdx)) return [3 /*break*/, 6];
                drawBars(i - 1, lastIdx, i);
                return [4 /*yield*/, delay()];
            case 3:
                _a.sent();
                if (!(array[i] < array[i - 1])) return [3 /*break*/, 5];
                isSwap = true;
                swap(i, i - 1);
                drawBars(i, lastIdx, i - 1);
                return [4 /*yield*/, delay()];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                i++;
                return [3 /*break*/, 2];
            case 6:
                lastIdx -= 1;
                return [3 /*break*/, 1];
            case 7: return [2 /*return*/];
        }
    });
}); };
var insertionSort = function () { return __awaiter(_this, void 0, void 0, function () {
    var currentIdx, i, j;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 1;
                _a.label = 1;
            case 1:
                if (!(i < array.length)) return [3 /*break*/, 8];
                currentIdx = i;
                j = i - 1;
                _a.label = 2;
            case 2:
                if (!(j >= 0)) return [3 /*break*/, 6];
                drawBars(j, currentIdx, i);
                return [4 /*yield*/, delay()];
            case 3:
                _a.sent();
                if (!(array[i] < array[j])) return [3 /*break*/, 5];
                swap(i, j);
                drawBars(i, currentIdx, j);
                return [4 /*yield*/, delay()];
            case 4:
                _a.sent();
                i -= 1;
                _a.label = 5;
            case 5:
                j--;
                return [3 /*break*/, 2];
            case 6:
                i = currentIdx;
                _a.label = 7;
            case 7:
                i++;
                return [3 /*break*/, 1];
            case 8: return [2 /*return*/];
        }
    });
}); };
var selectionSort = function () { return __awaiter(_this, void 0, void 0, function () {
    var idx, minIdx, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idx = 0;
                minIdx = 0;
                _a.label = 1;
            case 1:
                if (!(idx < array.length - 1)) return [3 /*break*/, 8];
                return [4 /*yield*/, delay()];
            case 2:
                _a.sent();
                minIdx = idx;
                i = idx;
                _a.label = 3;
            case 3:
                if (!(i < array.length)) return [3 /*break*/, 7];
                drawBars(idx, minIdx, i);
                return [4 /*yield*/, delay()];
            case 4:
                _a.sent();
                if (!(array[minIdx] > array[i])) return [3 /*break*/, 6];
                minIdx = i;
                drawBars(idx, minIdx, i);
                return [4 /*yield*/, delay()];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                i++;
                return [3 /*break*/, 3];
            case 7:
                swap(idx, minIdx);
                drawBars(minIdx, idx);
                idx += 1;
                return [3 /*break*/, 1];
            case 8: return [2 /*return*/];
        }
    });
}); };
var partition = function (low, high) { return __awaiter(_this, void 0, void 0, function () {
    var i, j;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = low;
                j = low - 1;
                _a.label = 1;
            case 1:
                if (!(i < high)) return [3 /*break*/, 6];
                return [4 /*yield*/, delay()];
            case 2:
                _a.sent();
                if (!(array[i] < array[high])) return [3 /*break*/, 5];
                j += 1;
                drawBars(j, high, i);
                return [4 /*yield*/, delay()];
            case 3:
                _a.sent();
                swap(i, j);
                drawBars(i, high, j);
                return [4 /*yield*/, delay()];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                drawBars(j, high, i);
                i += 1;
                return [3 /*break*/, 1];
            case 6:
                drawBars(low, high, j + 1);
                return [4 /*yield*/, delay()];
            case 7:
                _a.sent();
                swap(j + 1, high);
                drawBars(low, j + 1, high);
                return [2 /*return*/, j + 1];
        }
    });
}); };
var quickSort = function (low, high) {
    if (low === void 0) { low = 0; }
    if (high === void 0) { high = array.length - 1; }
    return __awaiter(_this, void 0, void 0, function () {
        var pivot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (low >= high)
                        return [2 /*return*/];
                    return [4 /*yield*/, partition(low, high)];
                case 1:
                    pivot = _a.sent();
                    return [4 /*yield*/, quickSort(low, pivot - 1)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, quickSort(pivot + 1, high)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
var reheapUp = function (position) { return __awaiter(_this, void 0, void 0, function () {
    var parent_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(position > 0)) return [3 /*break*/, 4];
                parent_1 = Math.floor((position - 1) / 2);
                if (!(array[position] > array[parent_1])) return [3 /*break*/, 4];
                return [4 /*yield*/, delay()];
            case 1:
                _a.sent();
                drawBars(parent_1, position);
                swap(position, parent_1);
                return [4 /*yield*/, delay()];
            case 2:
                _a.sent();
                drawBars(position, parent_1);
                return [4 /*yield*/, reheapUp(parent_1)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
var reheapDown = function (position, lastPosition) { return __awaiter(_this, void 0, void 0, function () {
    var leftChild, rightChild, largeChild;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                leftChild = 2 * position + 1;
                rightChild = 2 * position + 2;
                largeChild = leftChild;
                drawBars(position, lastPosition);
                return [4 /*yield*/, delay()];
            case 1:
                _a.sent();
                if (!(leftChild <= lastPosition)) return [3 /*break*/, 3];
                if (rightChild <= lastPosition && array[rightChild] > array[leftChild])
                    largeChild = rightChild;
                if (!(array[largeChild] > array[position])) return [3 /*break*/, 3];
                swap(position, largeChild);
                return [4 /*yield*/, reheapDown(largeChild, lastPosition)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
var buildHeap = function () { return __awaiter(_this, void 0, void 0, function () {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 1;
                _a.label = 1;
            case 1:
                if (!(i < array.length)) return [3 /*break*/, 4];
                return [4 /*yield*/, reheapUp(i)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
var heapSort = function () { return __awaiter(_this, void 0, void 0, function () {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, buildHeap()];
            case 1:
                _a.sent();
                i = array.length - 1;
                _a.label = 2;
            case 2:
                if (!(i > 0)) return [3 /*break*/, 7];
                drawBars(0, i);
                return [4 /*yield*/, delay()];
            case 3:
                _a.sent();
                swap(0, i);
                drawBars(i, 0);
                return [4 /*yield*/, delay()];
            case 4:
                _a.sent();
                return [4 /*yield*/, reheapDown(0, i - 1)];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                i--;
                return [3 /*break*/, 2];
            case 7: return [2 /*return*/];
        }
    });
}); };
var generateNew = function () {
    if (!isStart || isDone) {
        isReset = true;
        isStart = false;
        isDone = false;
        array = generateRandomArray(numOfBars, lowerBound, upperBound);
        setup();
    }
};
var width; // Width of a bar in rem
var numOfBars; // Number of bars
var delayDuration;
var heightOfOneUnit = 0.3; // Height of one unit of bar's height in rem
var lowerBound = 0; // Lower bound of the range for sorting
var upperBound = 100; // Upper bound of the range for sorting
var barBgColor = "rgb(0, 0, 255)"; // Background color of bars
var barBorderColor = "rgb(0, 0, 0)"; // Border color of bars
var lowColor = "rgb(255, 0, 0)";
var highColor = "rgb(0, 255, 0)";
var idxColor = "rgb(255, 255, 0)";
var array = [];
var isReset = true;
var isStart = false;
var isDone = false;
var main = function () {
    var sortingAlgorithm = document.querySelector("select");
    var numberOfBars = document.querySelector("#numBars");
    var speed = document.querySelector("#speed");
    numberOfBars.value = "" + Math.floor(Number(numberOfBars.max) / 4);
    speed.value = "" + Number(speed.max);
    numOfBars = Number(numberOfBars.value);
    width = (Number(numberOfBars.max) * 0.2) / numOfBars;
    delayDuration = Number(speed.max) - Number(speed.value);
    array = generateRandomArray(numOfBars, lowerBound, upperBound);
    setup();
    document.querySelector(".startBtn").addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var startTime, endTime;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(isReset || isDone)) return [3 /*break*/, 11];
                    isReset = false;
                    isStart = true;
                    startTime = new Date().getTime();
                    if (!(sortingAlgorithm.value == "Bubble sort")) return [3 /*break*/, 2];
                    return [4 /*yield*/, bubbleSort()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(sortingAlgorithm.value == "Insertion sort")) return [3 /*break*/, 4];
                    return [4 /*yield*/, insertionSort()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(sortingAlgorithm.value == "Selection sort")) return [3 /*break*/, 6];
                    return [4 /*yield*/, selectionSort()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(sortingAlgorithm.value == "Quick sort")) return [3 /*break*/, 8];
                    return [4 /*yield*/, quickSort()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    if (!(sortingAlgorithm.value == "Heap sort")) return [3 /*break*/, 10];
                    return [4 /*yield*/, heapSort()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    drawBars();
                    isDone = true;
                    endTime = new Date().getTime();
                    console.log("Duration of " + sortingAlgorithm.value + ": " + (endTime - startTime) / 1000 + "s");
                    _a.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    }); });
    document.querySelector(".generateNewBtn").addEventListener("click", function () {
        generateNew();
    });
    numberOfBars.addEventListener("input", function () {
        numOfBars = Number(numberOfBars.value);
        width = (200 * 0.2) / numOfBars;
        generateNew();
    });
    speed.addEventListener("input", function () {
        delayDuration = Number(speed.max) - Number(speed.value);
    });
};
main();

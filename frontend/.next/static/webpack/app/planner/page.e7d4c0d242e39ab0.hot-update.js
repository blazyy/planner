"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/planner/page",{

/***/ "(app-pages-browser)/./components/planner/TaskColumns/utils.ts":
/*!*************************************************!*\
  !*** ./components/planner/TaskColumns/utils.ts ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleOnDragEnd: function() { return /* binding */ handleOnDragEnd; },\n/* harmony export */   handleOnDragStart: function() { return /* binding */ handleOnDragStart; }\n/* harmony export */ });\n/* harmony import */ var _app_utils_plannerUtils_cardUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/utils/plannerUtils/cardUtils */ \"(app-pages-browser)/./app/utils/plannerUtils/cardUtils.ts\");\n/* harmony import */ var _app_utils_plannerUtils_columnUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/utils/plannerUtils/columnUtils */ \"(app-pages-browser)/./app/utils/plannerUtils/columnUtils.ts\");\n/* __next_internal_client_entry_do_not_use__ handleOnDragEnd,handleOnDragStart auto */ \n\nconst handleOnDragEnd = (result, dispatch, plannerContext, boardId)=>{\n    const { destination, source, draggableId, type } = result;\n    const { showErrorBoundary, boards, columns } = plannerContext;\n    // If there's no destination or if card is in original position from where it was dragged from, do nothing\n    if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) {\n        return;\n    }\n    if (type === \"subtask\") {\n        dispatch({\n            type: \"subTasksReordered\",\n            payload: {\n                draggableId: draggableId,\n                sourceIndex: source.index,\n                destIndex: destination.index\n            }\n        });\n        dispatch({\n            type: \"subTaskDragStatusChanged\",\n            payload: false\n        });\n        return;\n    }\n    if (type === \"column\") {\n        (0,_app_utils_plannerUtils_columnUtils__WEBPACK_IMPORTED_MODULE_1__.changeColumnOrder)(dispatch, showErrorBoundary, boards, boardId, draggableId, source.index, destination.index);\n        return;\n    }\n    dispatch({\n        type: \"idOfCardBeingDraggedChanged\",\n        payload: \"\"\n    });\n    // Moving a card within the same column\n    if (columns[source.droppableId] === columns[destination.droppableId]) {\n        return (0,_app_utils_plannerUtils_cardUtils__WEBPACK_IMPORTED_MODULE_0__.moveCardWithinColumn)(dispatch, showErrorBoundary, columns, draggableId, source, destination);\n    }\n    // Moving cards betweean columns\n    dispatch({\n        type: \"cardMovedAcrossColumns\",\n        payload: {\n            draggableId,\n            source,\n            destination\n        }\n    });\n};\nconst handleOnDragStart = (dragStartObj, dispatch)=>{\n    if (dragStartObj.type === \"subtask\") {\n        // const { setIsSubTaskBeingDragged } = plannerContext!\n        dispatch({\n            type: \"subTaskDragStatusChanged\",\n            payload: true\n        });\n    }\n    if (dragStartObj.type === \"card\") {\n        dispatch({\n            type: \"idOfCardBeingDraggedChanged\",\n            payload: dragStartObj.draggableId\n        });\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcGxhbm5lci9UYXNrQ29sdW1ucy91dGlscy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O3VGQUN5RTtBQUNEO0FBV2pFLE1BQU1FLGtCQUFpQyxDQUFDQyxRQUFRQyxVQUFVQyxnQkFBZ0JDO0lBQy9FLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFdBQVcsRUFBRUMsSUFBSSxFQUFFLEdBQUdQO0lBQ25ELE1BQU0sRUFBRVEsaUJBQWlCLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdSO0lBRS9DLDBHQUEwRztJQUMxRyxJQUFJLENBQUNFLGVBQWdCQSxZQUFZTyxXQUFXLEtBQUtOLE9BQU9NLFdBQVcsSUFBSVAsWUFBWVEsS0FBSyxLQUFLUCxPQUFPTyxLQUFLLEVBQUc7UUFDMUc7SUFDRjtJQUVBLElBQUlMLFNBQVMsV0FBVztRQUN0Qk4sU0FBVTtZQUNSTSxNQUFNO1lBQ05NLFNBQVM7Z0JBQ1BQLGFBQWFBO2dCQUNiUSxhQUFhVCxPQUFPTyxLQUFLO2dCQUN6QkcsV0FBV1gsWUFBWVEsS0FBSztZQUM5QjtRQUNGO1FBQ0FYLFNBQVU7WUFDUk0sTUFBTTtZQUNOTSxTQUFTO1FBQ1g7UUFDQTtJQUNGO0lBRUEsSUFBSU4sU0FBUyxVQUFVO1FBQ3JCVCxzRkFBaUJBLENBQUNHLFVBQVVPLG1CQUFtQkMsUUFBUU4sU0FBU0csYUFBYUQsT0FBT08sS0FBSyxFQUFFUixZQUFZUSxLQUFLO1FBQzVHO0lBQ0Y7SUFFQVgsU0FBVTtRQUNSTSxNQUFNO1FBQ05NLFNBQVM7SUFDWDtJQUVBLHVDQUF1QztJQUN2QyxJQUFJSCxPQUFPLENBQUNMLE9BQU9NLFdBQVcsQ0FBQyxLQUFLRCxPQUFPLENBQUNOLFlBQVlPLFdBQVcsQ0FBQyxFQUFFO1FBQ3BFLE9BQU9kLHVGQUFvQkEsQ0FBQ0ksVUFBVU8sbUJBQW1CRSxTQUFTSixhQUFhRCxRQUFRRDtJQUN6RjtJQUVBLGdDQUFnQztJQUNoQ0gsU0FBUztRQUNQTSxNQUFNO1FBQ05NLFNBQVM7WUFDUFA7WUFDQUQ7WUFDQUQ7UUFDRjtJQUNGO0FBQ0YsRUFBQztBQUlNLE1BQU1ZLG9CQUF5QyxDQUFDQyxjQUFjaEI7SUFDbkUsSUFBSWdCLGFBQWFWLElBQUksS0FBSyxXQUFXO1FBQ25DLHVEQUF1RDtRQUN2RE4sU0FBVTtZQUNSTSxNQUFNO1lBQ05NLFNBQVM7UUFDWDtJQUNGO0lBQ0EsSUFBSUksYUFBYVYsSUFBSSxLQUFLLFFBQVE7UUFDaENOLFNBQVU7WUFDUk0sTUFBTTtZQUNOTSxTQUFTSSxhQUFhWCxXQUFXO1FBQ25DO0lBQ0Y7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGxhbm5lci9UYXNrQ29sdW1ucy91dGlscy50cz8zYmQyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgbW92ZUNhcmRXaXRoaW5Db2x1bW4gfSBmcm9tICdAL2FwcC91dGlscy9wbGFubmVyVXRpbHMvY2FyZFV0aWxzJ1xuaW1wb3J0IHsgY2hhbmdlQ29sdW1uT3JkZXIgfSBmcm9tICdAL2FwcC91dGlscy9wbGFubmVyVXRpbHMvY29sdW1uVXRpbHMnXG5pbXBvcnQgeyBQbGFubmVyRGlzcGF0Y2hDb250ZXh0VHlwZSwgUGxhbm5lclR5cGUgfSBmcm9tICdAL2hvb2tzL1BsYW5uZXIvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERyYWdTdGFydCwgRHJvcFJlc3VsdCB9IGZyb20gJ0BoZWxsby1wYW5nZWEvZG5kJ1xuXG50eXBlIE9uRHJhZ0VuZEZ1bmMgPSAoXG4gIHJlc3VsdDogRHJvcFJlc3VsdCxcbiAgZGlzcGF0Y2g6IFBsYW5uZXJEaXNwYXRjaENvbnRleHRUeXBlLFxuICBwbGFubmVyQ29udGV4dDogUGxhbm5lclR5cGUsXG4gIGJvYXJkSWQ6IHN0cmluZ1xuKSA9PiB2b2lkXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVPbkRyYWdFbmQ6IE9uRHJhZ0VuZEZ1bmMgPSAocmVzdWx0LCBkaXNwYXRjaCwgcGxhbm5lckNvbnRleHQsIGJvYXJkSWQpID0+IHtcbiAgY29uc3QgeyBkZXN0aW5hdGlvbiwgc291cmNlLCBkcmFnZ2FibGVJZCwgdHlwZSB9ID0gcmVzdWx0XG4gIGNvbnN0IHsgc2hvd0Vycm9yQm91bmRhcnksIGJvYXJkcywgY29sdW1ucyB9ID0gcGxhbm5lckNvbnRleHRcblxuICAvLyBJZiB0aGVyZSdzIG5vIGRlc3RpbmF0aW9uIG9yIGlmIGNhcmQgaXMgaW4gb3JpZ2luYWwgcG9zaXRpb24gZnJvbSB3aGVyZSBpdCB3YXMgZHJhZ2dlZCBmcm9tLCBkbyBub3RoaW5nXG4gIGlmICghZGVzdGluYXRpb24gfHwgKGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkID09PSBzb3VyY2UuZHJvcHBhYmxlSWQgJiYgZGVzdGluYXRpb24uaW5kZXggPT09IHNvdXJjZS5pbmRleCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0eXBlID09PSAnc3VidGFzaycpIHtcbiAgICBkaXNwYXRjaCEoe1xuICAgICAgdHlwZTogJ3N1YlRhc2tzUmVvcmRlcmVkJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZHJhZ2dhYmxlSWQ6IGRyYWdnYWJsZUlkLFxuICAgICAgICBzb3VyY2VJbmRleDogc291cmNlLmluZGV4LFxuICAgICAgICBkZXN0SW5kZXg6IGRlc3RpbmF0aW9uLmluZGV4LFxuICAgICAgfSxcbiAgICB9KVxuICAgIGRpc3BhdGNoISh7XG4gICAgICB0eXBlOiAnc3ViVGFza0RyYWdTdGF0dXNDaGFuZ2VkJyxcbiAgICAgIHBheWxvYWQ6IGZhbHNlLFxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ2NvbHVtbicpIHtcbiAgICBjaGFuZ2VDb2x1bW5PcmRlcihkaXNwYXRjaCwgc2hvd0Vycm9yQm91bmRhcnksIGJvYXJkcywgYm9hcmRJZCwgZHJhZ2dhYmxlSWQsIHNvdXJjZS5pbmRleCwgZGVzdGluYXRpb24uaW5kZXgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBkaXNwYXRjaCEoe1xuICAgIHR5cGU6ICdpZE9mQ2FyZEJlaW5nRHJhZ2dlZENoYW5nZWQnLFxuICAgIHBheWxvYWQ6ICcnLFxuICB9KVxuXG4gIC8vIE1vdmluZyBhIGNhcmQgd2l0aGluIHRoZSBzYW1lIGNvbHVtblxuICBpZiAoY29sdW1uc1tzb3VyY2UuZHJvcHBhYmxlSWRdID09PSBjb2x1bW5zW2Rlc3RpbmF0aW9uLmRyb3BwYWJsZUlkXSkge1xuICAgIHJldHVybiBtb3ZlQ2FyZFdpdGhpbkNvbHVtbihkaXNwYXRjaCwgc2hvd0Vycm9yQm91bmRhcnksIGNvbHVtbnMsIGRyYWdnYWJsZUlkLCBzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICB9XG5cbiAgLy8gTW92aW5nIGNhcmRzIGJldHdlZWFuIGNvbHVtbnNcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdjYXJkTW92ZWRBY3Jvc3NDb2x1bW5zJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBkcmFnZ2FibGVJZCxcbiAgICAgIHNvdXJjZSxcbiAgICAgIGRlc3RpbmF0aW9uLFxuICAgIH0sXG4gIH0pXG59XG5cbnR5cGUgT25EcmFnU3RhcnRGdW5jdGlvbiA9IChkcmFnU3RhcnRPYmo6IERyYWdTdGFydCwgZGlzcGF0Y2g6IFBsYW5uZXJEaXNwYXRjaENvbnRleHRUeXBlKSA9PiB2b2lkXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVPbkRyYWdTdGFydDogT25EcmFnU3RhcnRGdW5jdGlvbiA9IChkcmFnU3RhcnRPYmosIGRpc3BhdGNoKSA9PiB7XG4gIGlmIChkcmFnU3RhcnRPYmoudHlwZSA9PT0gJ3N1YnRhc2snKSB7XG4gICAgLy8gY29uc3QgeyBzZXRJc1N1YlRhc2tCZWluZ0RyYWdnZWQgfSA9IHBsYW5uZXJDb250ZXh0IVxuICAgIGRpc3BhdGNoISh7XG4gICAgICB0eXBlOiAnc3ViVGFza0RyYWdTdGF0dXNDaGFuZ2VkJyxcbiAgICAgIHBheWxvYWQ6IHRydWUsXG4gICAgfSlcbiAgfVxuICBpZiAoZHJhZ1N0YXJ0T2JqLnR5cGUgPT09ICdjYXJkJykge1xuICAgIGRpc3BhdGNoISh7XG4gICAgICB0eXBlOiAnaWRPZkNhcmRCZWluZ0RyYWdnZWRDaGFuZ2VkJyxcbiAgICAgIHBheWxvYWQ6IGRyYWdTdGFydE9iai5kcmFnZ2FibGVJZCxcbiAgICB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsibW92ZUNhcmRXaXRoaW5Db2x1bW4iLCJjaGFuZ2VDb2x1bW5PcmRlciIsImhhbmRsZU9uRHJhZ0VuZCIsInJlc3VsdCIsImRpc3BhdGNoIiwicGxhbm5lckNvbnRleHQiLCJib2FyZElkIiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJkcmFnZ2FibGVJZCIsInR5cGUiLCJzaG93RXJyb3JCb3VuZGFyeSIsImJvYXJkcyIsImNvbHVtbnMiLCJkcm9wcGFibGVJZCIsImluZGV4IiwicGF5bG9hZCIsInNvdXJjZUluZGV4IiwiZGVzdEluZGV4IiwiaGFuZGxlT25EcmFnU3RhcnQiLCJkcmFnU3RhcnRPYmoiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/planner/TaskColumns/utils.ts\n"));

/***/ })

});
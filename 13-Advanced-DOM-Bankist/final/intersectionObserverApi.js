/* NOTE: The Intersection Observer API allows you to configure a callback that is called when either of these circumstances occur: 1- A target element intersects either the device's viewport or a specified element. 2-That specified element is called the root element or root for the purposes of the Intersection Observer API. The first time the observer is initially asked to watch a target element. */

//NOTE: A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.


/*
NOTE:  root-
The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.

NOTE: rootMargin-
Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.

NOTE:  threshold-
Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
*/
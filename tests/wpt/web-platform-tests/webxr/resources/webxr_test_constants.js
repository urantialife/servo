// assert_equals can fail when comparing floats due to precision errors, so
// use assert_approx_equals with this constant instead
const FLOAT_EPSILON = 0.001;

// Identity matrix
const IDENTITY_MATRIX = [1, 0, 0, 0,
                         0, 1, 0, 0,
                         0, 0, 1, 0,
                         0, 0, 0, 1];

const IDENTITY_TRANSFORM = {
    position: [0, 0, 0],
    orientation: [0, 0, 0, 1],
};

// A valid pose matrix/transform for  when we don't care about specific values
// Note that these two should be identical, just different representations
const VALID_POSE_MATRIX = [0, 1, 0, 0,
                           0, 0, 1, 0,
                           1, 0, 0, 0,
                           1, 1, 1, 1];

const VALID_POSE_TRANSFORM = {
    position: [1, 1, 1],
    orientation: [0.5, 0.5, 0.5, 0.5]
};

const VALID_PROJECTION_MATRIX =
    [1, 0, 0, 0, 0, 1, 0, 0, 3, 2, -1, -1, 0, 0, -0.2, 0];

// A valid input grip matrix for  when we don't care about specific values
const VALID_GRIP = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 3, 2, 1];

// A valid input pointer offset for  when we don't care about specific values
const VALID_POINTER_OFFSET = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1];

const VALID_GRIP_WITH_POINTER_OFFSET =
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 3, 3, 1];

// A Valid Local to floor matrix/transform for when we don't care about specific
// values.  Note that these should be identical, just different representations.
const VALID_LOCAL_TO_FLOOR_MATRIX = [1, 0,    0,  0,
                                     0, 1,    0,  0,
                                     0, 0,    1,  0,
                                     1, 1.65, -1, 1];

const VALID_LOCAL_TO_FLOOR_TRANSFORM = {
    position: [1.0, 1.65, -1.0],
    orientation: [0, 0, 0, 1]
};

const VALID_BOUNDS = [
    { x: 3.0, z: -2.0 },
    { x: 3.5, z: 0.0 },
    { x: 3.0, z: 2.0 },
    { x: -3.0, z: 2.0 },
    { x: -3.5, z: 0.0 },
    { x: -3.0, z: -2.0 }
];

const VALID_RESOLUTION = {
    width: 20,
    height: 20
};

const LEFT_OFFSET = {
    position: [-0.1, 0, 0],
    orientation: [0, 0, 0, 1]
};

const RIGHT_OFFSET = {
    position: [0.1, 0, 0],
    orientation: [0, 0, 0, 1]
};

const VALID_VIEWS = [{
        eye:"left",
        projectionMatrix: VALID_PROJECTION_MATRIX,
        viewOffset: LEFT_OFFSET,
        resolution: VALID_RESOLUTION
    }, {
        eye:"right",
        projectionMatrix: VALID_PROJECTION_MATRIX,
        viewOffset: RIGHT_OFFSET,
        resolution: VALID_RESOLUTION
    },
];

const NON_IMMERSIVE_VIEWS = [{
        eye: "none",
        projectionMatrix: VALID_PROJECTION_MATRIX,
        viewOffset: IDENTITY_TRANSFORM,
        resolution: VALID_RESOLUTION,
    }
];

const TRACKED_IMMERSIVE_DEVICE = {
    supportsImmersive: true,
    views: VALID_VIEWS,
    viewerOrigin: IDENTITY_TRANSFORM
};

const VALID_NON_IMMERSIVE_DEVICE = {
    supportsImmersive: false,
    views: NON_IMMERSIVE_VIEWS,
    viewerOrigin: IDENTITY_TRANSFORM
};

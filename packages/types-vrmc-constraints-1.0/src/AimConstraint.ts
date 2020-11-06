import type { Space } from './Space';

/**
 * A constraint that rotates the node to face sources.
 */
export interface AimConstraint {
  /**
   * The index of the node constrains the node.
   */
  source: number;

  /**
   * The source node will be evaluated in this space.
   */
  sourceSpace?: Space;

  /**
   * The destination node will be evaluated in this space.
   */
  destinationSpace?: Space;

  /**
   * An axis which faces the direction of its sources.
   */
  aimVector?: [number, number, number];

  /**
   * An up axis of the constraint.
   */
  upVector?: [number, number, number];

  /**
   * Axes be constrained by this constraint, in Yaw-Pitch order.
   */
  freezeAxes?: [boolean, boolean];

  /**
   * The weight of the constraint.
   */
  weight?: number;
}

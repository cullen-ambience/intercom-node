/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         data_attribute_id: "1",
 *         archived: false,
 *         description: "Just a plain old ring",
 *         options: [{
 *                 value: "1-10"
 *             }, {
 *                 value: "11-20"
 *             }]
 *     }
 *
 * @example
 *     {
 *         data_attribute_id: "1",
 *         archived: false,
 *         description: "Too few options",
 *         options: [{
 *                 value: "value"
 *             }, {
 *                 value: "value"
 *             }]
 *     }
 *
 * @example
 *     {
 *         data_attribute_id: "1",
 *         archived: false,
 *         description: "Just a plain old ring",
 *         options: [{
 *                 value: "1-10"
 *             }, {
 *                 value: "11-20"
 *             }]
 *     }
 *
 * @example
 *     {
 *         data_attribute_id: "1",
 *         archived: true,
 *         description: "Trying to archieve"
 *     }
 */
export interface UpdateDataAttributeRequest {
    /**
     * The data attribute id
     */
    data_attribute_id: string;
    /** Whether the attribute is to be archived or not. */
    archived?: boolean;
    /** The readable description you see in the UI for the attribute. */
    description?: string;
    /** To create list attributes. Provide a set of hashes with `value` as the key of the options you want to make. `data_type` must be `string`. */
    options?: UpdateDataAttributeRequest.Options.Item[];
    /** Can this attribute be updated by the Messenger */
    messenger_writable?: boolean;
}

export namespace UpdateDataAttributeRequest {
    export type Options = Options.Item[];

    export namespace Options {
        export interface Item {
            value: string;
        }
    }
}

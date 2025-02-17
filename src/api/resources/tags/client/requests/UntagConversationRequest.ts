/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         conversation_id: "64619700005694",
 *         tag_id: "7522907",
 *         admin_id: "123"
 *     }
 *
 * @example
 *     {
 *         conversation_id: "64619700005694",
 *         tag_id: "7522907",
 *         admin_id: "123"
 *     }
 *
 * @example
 *     {
 *         conversation_id: "64619700005694",
 *         tag_id: "7522907",
 *         admin_id: "123"
 *     }
 */
export interface UntagConversationRequest {
    /**
     * conversation_id
     */
    conversation_id: string;
    /**
     * id
     */
    tag_id: string;
    /** The unique identifier for the admin which is given by Intercom. */
    admin_id: string;
}

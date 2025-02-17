/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Intercom from "../../../../index";

/**
 * @example
 *     {
 *         ticket_type_id: "1234",
 *         contacts: [{
 *                 id: "667d61b78a68186f43bafe8d"
 *             }],
 *         ticket_attributes: {
 *             "_default_title_": "example",
 *             "_default_description_": "there is a problem"
 *         }
 *     }
 */
export interface CreateTicketRequest {
    /** The ID of the type of ticket you want to create */
    ticket_type_id: string;
    /** The list of contacts (users or leads) affected by this ticket. Currently only one is allowed */
    contacts: CreateTicketRequest.Contacts.Item[];
    /** The ID of the company that the ticket is associated with. The ID that you set upon company creation. */
    company_id?: string;
    /** The time the ticket was created. If not provided, the current time will be used. */
    created_at?: number;
    ticket_attributes?: Intercom.TicketRequestCustomAttributes;
}

export namespace CreateTicketRequest {
    export type Contacts = Contacts.Item[];

    export namespace Contacts {
        export type Item =
            | {
                  id: string;
              }
            | {
                  external_id: string;
              }
            | {
                  email: string;
              };
    }
}

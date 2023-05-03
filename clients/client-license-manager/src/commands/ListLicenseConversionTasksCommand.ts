// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListLicenseConversionTasksRequest, ListLicenseConversionTasksResponse } from "../models/models_0";
import { de_ListLicenseConversionTasksCommand, se_ListLicenseConversionTasksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListLicenseConversionTasksCommand}.
 */
export interface ListLicenseConversionTasksCommandInput extends ListLicenseConversionTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListLicenseConversionTasksCommand}.
 */
export interface ListLicenseConversionTasksCommandOutput extends ListLicenseConversionTasksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the license type conversion tasks for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseConversionTasksCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseConversionTasksCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // ListLicenseConversionTasksRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListLicenseConversionTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListLicenseConversionTasksResponse
 * //   LicenseConversionTasks: [ // LicenseConversionTasks
 * //     { // LicenseConversionTask
 * //       LicenseConversionTaskId: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       SourceLicenseContext: { // LicenseConversionContext
 * //         UsageOperation: "STRING_VALUE",
 * //       },
 * //       DestinationLicenseContext: {
 * //         UsageOperation: "STRING_VALUE",
 * //       },
 * //       Status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       LicenseConversionTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLicenseConversionTasksCommandInput - {@link ListLicenseConversionTasksCommandInput}
 * @returns {@link ListLicenseConversionTasksCommandOutput}
 * @see {@link ListLicenseConversionTasksCommandInput} for command's `input` shape.
 * @see {@link ListLicenseConversionTasksCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 */
export class ListLicenseConversionTasksCommand extends $Command<
  ListLicenseConversionTasksCommandInput,
  ListLicenseConversionTasksCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListLicenseConversionTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLicenseConversionTasksCommandInput, ListLicenseConversionTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLicenseConversionTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListLicenseConversionTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListLicenseConversionTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLicenseConversionTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLicenseConversionTasksCommandOutput> {
    return de_ListLicenseConversionTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

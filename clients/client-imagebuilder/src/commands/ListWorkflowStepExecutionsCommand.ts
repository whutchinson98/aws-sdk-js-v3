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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListWorkflowStepExecutionsRequest, ListWorkflowStepExecutionsResponse } from "../models/models_0";
import { de_ListWorkflowStepExecutionsCommand, se_ListWorkflowStepExecutionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListWorkflowStepExecutionsCommand}.
 */
export interface ListWorkflowStepExecutionsCommandInput extends ListWorkflowStepExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowStepExecutionsCommand}.
 */
export interface ListWorkflowStepExecutionsCommandOutput extends ListWorkflowStepExecutionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Shows runtime data for each step in a runtime instance of the workflow
 * 			that you specify in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListWorkflowStepExecutionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListWorkflowStepExecutionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListWorkflowStepExecutionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   workflowExecutionId: "STRING_VALUE", // required
 * };
 * const command = new ListWorkflowStepExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowStepExecutionsResponse
 * //   requestId: "STRING_VALUE",
 * //   steps: [ // WorkflowStepExecutionsList
 * //     { // WorkflowStepMetadata
 * //       stepExecutionId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       action: "STRING_VALUE",
 * //       status: "PENDING" || "SKIPPED" || "RUNNING" || "COMPLETED" || "FAILED",
 * //       rollbackStatus: "RUNNING" || "COMPLETED" || "SKIPPED" || "FAILED",
 * //       message: "STRING_VALUE",
 * //       inputs: "STRING_VALUE",
 * //       outputs: "STRING_VALUE",
 * //       startTime: "STRING_VALUE",
 * //       endTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   workflowBuildVersionArn: "STRING_VALUE",
 * //   workflowExecutionId: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   message: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowStepExecutionsCommandInput - {@link ListWorkflowStepExecutionsCommandInput}
 * @returns {@link ListWorkflowStepExecutionsCommandOutput}
 * @see {@link ListWorkflowStepExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowStepExecutionsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 */
export class ListWorkflowStepExecutionsCommand extends $Command<
  ListWorkflowStepExecutionsCommandInput,
  ListWorkflowStepExecutionsCommandOutput,
  ImagebuilderClientResolvedConfig
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
  constructor(readonly input: ListWorkflowStepExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkflowStepExecutionsCommandInput, ListWorkflowStepExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWorkflowStepExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListWorkflowStepExecutionsCommand";
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
  private serialize(input: ListWorkflowStepExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWorkflowStepExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWorkflowStepExecutionsCommandOutput> {
    return de_ListWorkflowStepExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import {
  DeviceFarmClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DeviceFarmClient";
import { CreateUploadRequest, CreateUploadResult } from "../models/index";
import {
  deserializeAws_json1_1CreateUploadCommand,
  serializeAws_json1_1CreateUploadCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type CreateUploadCommandInput = CreateUploadRequest;
export type CreateUploadCommandOutput = CreateUploadResult;

export class CreateUploadCommand extends $Command<
  CreateUploadCommandInput,
  CreateUploadCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUploadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUploadCommandInput, CreateUploadCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateUploadCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateUploadCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateUploadCommandOutput> {
    return deserializeAws_json1_1CreateUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

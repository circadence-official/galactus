// source: core/registry/v1/registry.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var core_aggregates_v1_registry_pb = require('../../../core/aggregates/v1/registry_pb.js');
goog.object.extend(proto, core_aggregates_v1_registry_pb);
goog.exportSymbol('proto.core.registry.v1.ConnectionRequest', null, global);
goog.exportSymbol('proto.core.registry.v1.ConnectionResponse', null, global);
goog.exportSymbol('proto.core.registry.v1.Protocol', null, global);
goog.exportSymbol('proto.core.registry.v1.RegisterRequest', null, global);
goog.exportSymbol('proto.core.registry.v1.RegisterResponse', null, global);
goog.exportSymbol('proto.core.registry.v1.ServiceStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.core.registry.v1.RegisterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.core.registry.v1.RegisterRequest.repeatedFields_, null);
};
goog.inherits(proto.core.registry.v1.RegisterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.core.registry.v1.RegisterRequest.displayName = 'proto.core.registry.v1.RegisterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.core.registry.v1.Protocol = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.core.registry.v1.Protocol, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.core.registry.v1.Protocol.displayName = 'proto.core.registry.v1.Protocol';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.core.registry.v1.RegisterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.core.registry.v1.RegisterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.core.registry.v1.RegisterResponse.displayName = 'proto.core.registry.v1.RegisterResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.core.registry.v1.ConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.core.registry.v1.ConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.core.registry.v1.ConnectionRequest.displayName = 'proto.core.registry.v1.ConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.core.registry.v1.ConnectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.core.registry.v1.ConnectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.core.registry.v1.ConnectionResponse.displayName = 'proto.core.registry.v1.ConnectionResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.core.registry.v1.RegisterRequest.repeatedFields_ = [5,6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.core.registry.v1.RegisterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.core.registry.v1.RegisterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.core.registry.v1.RegisterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.core.registry.v1.RegisterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    protocolsList: jspb.Message.toObjectList(msg.getProtocolsList(),
    proto.core.registry.v1.Protocol.toObject, includeInstance),
    producersList: jspb.Message.toObjectList(msg.getProducersList(),
    core_aggregates_v1_registry_pb.Producer.toObject, includeInstance),
    consumersList: jspb.Message.toObjectList(msg.getConsumersList(),
    core_aggregates_v1_registry_pb.Consumer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.core.registry.v1.RegisterRequest}
 */
proto.core.registry.v1.RegisterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.core.registry.v1.RegisterRequest;
  return proto.core.registry.v1.RegisterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.core.registry.v1.RegisterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.core.registry.v1.RegisterRequest}
 */
proto.core.registry.v1.RegisterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.core.registry.v1.Protocol;
      reader.readMessage(value,proto.core.registry.v1.Protocol.deserializeBinaryFromReader);
      msg.addProtocols(value);
      break;
    case 6:
      var value = new core_aggregates_v1_registry_pb.Producer;
      reader.readMessage(value,core_aggregates_v1_registry_pb.Producer.deserializeBinaryFromReader);
      msg.addProducers(value);
      break;
    case 7:
      var value = new core_aggregates_v1_registry_pb.Consumer;
      reader.readMessage(value,core_aggregates_v1_registry_pb.Consumer.deserializeBinaryFromReader);
      msg.addConsumers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.core.registry.v1.RegisterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.core.registry.v1.RegisterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.core.registry.v1.RegisterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.core.registry.v1.RegisterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProtocolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.core.registry.v1.Protocol.serializeBinaryToWriter
    );
  }
  f = message.getProducersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      core_aggregates_v1_registry_pb.Producer.serializeBinaryToWriter
    );
  }
  f = message.getConsumersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      core_aggregates_v1_registry_pb.Consumer.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.core.registry.v1.RegisterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.core.registry.v1.RegisterRequest} returns this
 */
proto.core.registry.v1.RegisterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.core.registry.v1.RegisterRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.core.registry.v1.RegisterRequest} returns this
 */
proto.core.registry.v1.RegisterRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.core.registry.v1.RegisterRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.core.registry.v1.RegisterRequest} returns this
 */
proto.core.registry.v1.RegisterRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.core.registry.v1.RegisterRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.core.registry.v1.RegisterRequest} returns this
 */
proto.core.registry.v1.RegisterRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Protocol protocols = 5;
 * @return {!Array<!proto.core.registry.v1.Protocol>}
 */
proto.core.registry.v1.RegisterRequest.prototype.getProtocolsList = function() {
  return /** @type{!Array<!proto.core.registry.v1.Protocol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.core.registry.v1.Protocol, 5));
};


/**
 * @param {!Array<!proto.core.registry.v1.Protocol>} value
 * @return {!proto.core.registry.v1.RegisterRequest} returns this
*/
proto.core.registry.v1.RegisterRequest.prototype.setProtocolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.core.registry.v1.Protocol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.core.registry.v1.Protocol}
 */
proto.core.registry.v1.RegisterRequest.prototype.addProtocols = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.core.registry.v1.Protocol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.core.registry.v1.RegisterRequest} returns this
 */
proto.core.registry.v1.RegisterRequest.prototype.clearProtocolsList = function() {
  return this.setProtocolsList([]);
};


/**
 * repeated core.aggregates.v1.Producer producers = 6;
 * @return {!Array<!proto.core.aggregates.v1.Producer>}
 */
proto.core.registry.v1.RegisterRequest.prototype.getProducersList = function() {
  return /** @type{!Array<!proto.core.aggregates.v1.Producer>} */ (
    jspb.Message.getRepeatedWrapperField(this, core_aggregates_v1_registry_pb.Producer, 6));
};


/**
 * @param {!Array<!proto.core.aggregates.v1.Producer>} value
 * @return {!proto.core.registry.v1.RegisterRequest} returns this
*/
proto.core.registry.v1.RegisterRequest.prototype.setProducersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.core.aggregates.v1.Producer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.core.aggregates.v1.Producer}
 */
proto.core.registry.v1.RegisterRequest.prototype.addProducers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.core.aggregates.v1.Producer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.core.registry.v1.RegisterRequest} returns this
 */
proto.core.registry.v1.RegisterRequest.prototype.clearProducersList = function() {
  return this.setProducersList([]);
};


/**
 * repeated core.aggregates.v1.Consumer consumers = 7;
 * @return {!Array<!proto.core.aggregates.v1.Consumer>}
 */
proto.core.registry.v1.RegisterRequest.prototype.getConsumersList = function() {
  return /** @type{!Array<!proto.core.aggregates.v1.Consumer>} */ (
    jspb.Message.getRepeatedWrapperField(this, core_aggregates_v1_registry_pb.Consumer, 7));
};


/**
 * @param {!Array<!proto.core.aggregates.v1.Consumer>} value
 * @return {!proto.core.registry.v1.RegisterRequest} returns this
*/
proto.core.registry.v1.RegisterRequest.prototype.setConsumersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.core.aggregates.v1.Consumer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.core.aggregates.v1.Consumer}
 */
proto.core.registry.v1.RegisterRequest.prototype.addConsumers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.core.aggregates.v1.Consumer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.core.registry.v1.RegisterRequest} returns this
 */
proto.core.registry.v1.RegisterRequest.prototype.clearConsumersList = function() {
  return this.setConsumersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.core.registry.v1.Protocol.prototype.toObject = function(opt_includeInstance) {
  return proto.core.registry.v1.Protocol.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.core.registry.v1.Protocol} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.core.registry.v1.Protocol.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.core.registry.v1.Protocol}
 */
proto.core.registry.v1.Protocol.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.core.registry.v1.Protocol;
  return proto.core.registry.v1.Protocol.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.core.registry.v1.Protocol} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.core.registry.v1.Protocol}
 */
proto.core.registry.v1.Protocol.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.core.aggregates.v1.ProtocolKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.core.registry.v1.Protocol.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.core.registry.v1.Protocol.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.core.registry.v1.Protocol} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.core.registry.v1.Protocol.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional core.aggregates.v1.ProtocolKind kind = 1;
 * @return {!proto.core.aggregates.v1.ProtocolKind}
 */
proto.core.registry.v1.Protocol.prototype.getKind = function() {
  return /** @type {!proto.core.aggregates.v1.ProtocolKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.core.aggregates.v1.ProtocolKind} value
 * @return {!proto.core.registry.v1.Protocol} returns this
 */
proto.core.registry.v1.Protocol.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.core.registry.v1.RegisterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.core.registry.v1.RegisterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.core.registry.v1.RegisterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.core.registry.v1.RegisterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    registration: (f = msg.getRegistration()) && core_aggregates_v1_registry_pb.Registration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.core.registry.v1.RegisterResponse}
 */
proto.core.registry.v1.RegisterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.core.registry.v1.RegisterResponse;
  return proto.core.registry.v1.RegisterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.core.registry.v1.RegisterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.core.registry.v1.RegisterResponse}
 */
proto.core.registry.v1.RegisterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new core_aggregates_v1_registry_pb.Registration;
      reader.readMessage(value,core_aggregates_v1_registry_pb.Registration.deserializeBinaryFromReader);
      msg.setRegistration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.core.registry.v1.RegisterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.core.registry.v1.RegisterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.core.registry.v1.RegisterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.core.registry.v1.RegisterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegistration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      core_aggregates_v1_registry_pb.Registration.serializeBinaryToWriter
    );
  }
};


/**
 * optional core.aggregates.v1.Registration registration = 1;
 * @return {?proto.core.aggregates.v1.Registration}
 */
proto.core.registry.v1.RegisterResponse.prototype.getRegistration = function() {
  return /** @type{?proto.core.aggregates.v1.Registration} */ (
    jspb.Message.getWrapperField(this, core_aggregates_v1_registry_pb.Registration, 1));
};


/**
 * @param {?proto.core.aggregates.v1.Registration|undefined} value
 * @return {!proto.core.registry.v1.RegisterResponse} returns this
*/
proto.core.registry.v1.RegisterResponse.prototype.setRegistration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.core.registry.v1.RegisterResponse} returns this
 */
proto.core.registry.v1.RegisterResponse.prototype.clearRegistration = function() {
  return this.setRegistration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.core.registry.v1.RegisterResponse.prototype.hasRegistration = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.core.registry.v1.ConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.core.registry.v1.ConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.core.registry.v1.ConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.core.registry.v1.ConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.core.registry.v1.ConnectionRequest}
 */
proto.core.registry.v1.ConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.core.registry.v1.ConnectionRequest;
  return proto.core.registry.v1.ConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.core.registry.v1.ConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.core.registry.v1.ConnectionRequest}
 */
proto.core.registry.v1.ConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {!proto.core.aggregates.v1.ProtocolKind} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.core.registry.v1.ConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.core.registry.v1.ConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.core.registry.v1.ConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.core.registry.v1.ConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.core.registry.v1.ConnectionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.core.registry.v1.ConnectionRequest} returns this
 */
proto.core.registry.v1.ConnectionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.core.registry.v1.ConnectionRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.core.registry.v1.ConnectionRequest} returns this
 */
proto.core.registry.v1.ConnectionRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional core.aggregates.v1.ProtocolKind type = 3;
 * @return {!proto.core.aggregates.v1.ProtocolKind}
 */
proto.core.registry.v1.ConnectionRequest.prototype.getType = function() {
  return /** @type {!proto.core.aggregates.v1.ProtocolKind} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.core.aggregates.v1.ProtocolKind} value
 * @return {!proto.core.registry.v1.ConnectionRequest} returns this
 */
proto.core.registry.v1.ConnectionRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.core.registry.v1.ConnectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.core.registry.v1.ConnectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.core.registry.v1.ConnectionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.core.registry.v1.ConnectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.core.registry.v1.ConnectionResponse}
 */
proto.core.registry.v1.ConnectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.core.registry.v1.ConnectionResponse;
  return proto.core.registry.v1.ConnectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.core.registry.v1.ConnectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.core.registry.v1.ConnectionResponse}
 */
proto.core.registry.v1.ConnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {!proto.core.registry.v1.ServiceStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.core.registry.v1.ConnectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.core.registry.v1.ConnectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.core.registry.v1.ConnectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.core.registry.v1.ConnectionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.core.registry.v1.ConnectionResponse.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.core.registry.v1.ConnectionResponse} returns this
 */
proto.core.registry.v1.ConnectionResponse.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.core.registry.v1.ConnectionResponse.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.core.registry.v1.ConnectionResponse} returns this
 */
proto.core.registry.v1.ConnectionResponse.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional ServiceStatus status = 3;
 * @return {!proto.core.registry.v1.ServiceStatus}
 */
proto.core.registry.v1.ConnectionResponse.prototype.getStatus = function() {
  return /** @type {!proto.core.registry.v1.ServiceStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.core.registry.v1.ServiceStatus} value
 * @return {!proto.core.registry.v1.ConnectionResponse} returns this
 */
proto.core.registry.v1.ConnectionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.core.registry.v1.ServiceStatus = {
  SERVICE_STATUS_INVALID: 0,
  SERVICE_STATUS_HEALTHY: 1,
  SERVICE_STATUS_UNHEALTHY: 2
};

goog.object.extend(exports, proto.core.registry.v1);
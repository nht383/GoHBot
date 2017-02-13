/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Protos.ContentEncoding', null, global);
goog.exportSymbol('proto.Protos.DynamicMessage', null, global);
goog.exportSymbol('proto.Protos.ResponseCode', null, global);
goog.exportSymbol('proto.Protos.ResponseEnvelope', null, global);

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
proto.Protos.DynamicMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Protos.DynamicMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Protos.DynamicMessage.displayName = 'proto.Protos.DynamicMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Protos.DynamicMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.Protos.DynamicMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Protos.DynamicMessage} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Protos.DynamicMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: msg.getData_asB64(),
    messageId: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.Protos.DynamicMessage}
 */
proto.Protos.DynamicMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Protos.DynamicMessage;
  return proto.Protos.DynamicMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Protos.DynamicMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Protos.DynamicMessage}
 */
proto.Protos.DynamicMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.Protos.DynamicMessage} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Protos.DynamicMessage.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Protos.DynamicMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.Protos.DynamicMessage.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(this, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(this, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.Protos.DynamicMessage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Protos.DynamicMessage.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.Protos.DynamicMessage.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.DynamicMessage.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.Protos.DynamicMessage.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Protos.DynamicMessage.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.Protos.DynamicMessage.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.DynamicMessage.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.Protos.DynamicMessage.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes data = 3;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Protos.DynamicMessage.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Protos.DynamicMessage.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Protos.DynamicMessage.prototype.setData = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.Protos.DynamicMessage.prototype.clearData = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.DynamicMessage.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 message_id = 4;
 * @return {number}
 */
proto.Protos.DynamicMessage.prototype.getMessageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.Protos.DynamicMessage.prototype.setMessageId = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.Protos.DynamicMessage.prototype.clearMessageId = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.DynamicMessage.prototype.hasMessageId = function() {
  return jspb.Message.getField(this, 4) != null;
};



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
proto.Protos.ResponseEnvelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Protos.ResponseEnvelope.repeatedFields_, null);
};
goog.inherits(proto.Protos.ResponseEnvelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Protos.ResponseEnvelope.displayName = 'proto.Protos.ResponseEnvelope';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Protos.ResponseEnvelope.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Protos.ResponseEnvelope.prototype.toObject = function(opt_includeInstance) {
  return proto.Protos.ResponseEnvelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Protos.ResponseEnvelope} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Protos.ResponseEnvelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    correlationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    currentServerTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    payload: msg.getPayload_asB64(),
    code: jspb.Message.getFieldWithDefault(msg, 5, 1),
    message: jspb.Message.getFieldWithDefault(msg, 6, ""),
    contentEncoding: jspb.Message.getFieldWithDefault(msg, 7, 0),
    stackTrace: jspb.Message.getFieldWithDefault(msg, 8, ""),
    dynamicMessageList: jspb.Message.toObjectList(msg.getDynamicMessageList(),
    proto.Protos.DynamicMessage.toObject, includeInstance),
    maintenanceMessage: jspb.Message.getFieldWithDefault(msg, 10, ""),
    maintenanceLink: jspb.Message.getFieldWithDefault(msg, 11, ""),
    subCode: jspb.Message.getFieldWithDefault(msg, 12, 0)
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
 * @return {!proto.Protos.ResponseEnvelope}
 */
proto.Protos.ResponseEnvelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Protos.ResponseEnvelope;
  return proto.Protos.ResponseEnvelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Protos.ResponseEnvelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Protos.ResponseEnvelope}
 */
proto.Protos.ResponseEnvelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCorrelationId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentServerTime(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 5:
      var value = /** @type {!proto.Protos.ResponseCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 7:
      var value = /** @type {!proto.Protos.ContentEncoding} */ (reader.readEnum());
      msg.setContentEncoding(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStackTrace(value);
      break;
    case 9:
      var value = new proto.Protos.DynamicMessage;
      reader.readMessage(value,proto.Protos.DynamicMessage.deserializeBinaryFromReader);
      msg.addDynamicMessage(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaintenanceMessage(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaintenanceLink(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSubCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.Protos.ResponseEnvelope} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Protos.ResponseEnvelope.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Protos.ResponseEnvelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.Protos.ResponseEnvelope.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(this, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(this, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = /** @type {!proto.Protos.ResponseCode} */ (jspb.Message.getField(this, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {!proto.Protos.ContentEncoding} */ (jspb.Message.getField(this, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = this.getDynamicMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.Protos.DynamicMessage.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
};


/**
 * optional int32 correlation_id = 1;
 * @return {number}
 */
proto.Protos.ResponseEnvelope.prototype.getCorrelationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Protos.ResponseEnvelope.prototype.setCorrelationId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.Protos.ResponseEnvelope.prototype.clearCorrelationId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.ResponseEnvelope.prototype.hasCorrelationId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 current_server_time = 2;
 * @return {number}
 */
proto.Protos.ResponseEnvelope.prototype.getCurrentServerTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.Protos.ResponseEnvelope.prototype.setCurrentServerTime = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.Protos.ResponseEnvelope.prototype.clearCurrentServerTime = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.ResponseEnvelope.prototype.hasCurrentServerTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes payload = 4;
 * @return {!(string|Uint8Array)}
 */
proto.Protos.ResponseEnvelope.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes payload = 4;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.Protos.ResponseEnvelope.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.Protos.ResponseEnvelope.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/** @param {!(string|Uint8Array)} value */
proto.Protos.ResponseEnvelope.prototype.setPayload = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.Protos.ResponseEnvelope.prototype.clearPayload = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.ResponseEnvelope.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ResponseCode code = 5;
 * @return {!proto.Protos.ResponseCode}
 */
proto.Protos.ResponseEnvelope.prototype.getCode = function() {
  return /** @type {!proto.Protos.ResponseCode} */ (jspb.Message.getFieldWithDefault(this, 5, 1));
};


/** @param {!proto.Protos.ResponseCode} value */
proto.Protos.ResponseEnvelope.prototype.setCode = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.Protos.ResponseEnvelope.prototype.clearCode = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.ResponseEnvelope.prototype.hasCode = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.Protos.ResponseEnvelope.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.Protos.ResponseEnvelope.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.Protos.ResponseEnvelope.prototype.clearMessage = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.ResponseEnvelope.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ContentEncoding content_encoding = 7;
 * @return {!proto.Protos.ContentEncoding}
 */
proto.Protos.ResponseEnvelope.prototype.getContentEncoding = function() {
  return /** @type {!proto.Protos.ContentEncoding} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.Protos.ContentEncoding} value */
proto.Protos.ResponseEnvelope.prototype.setContentEncoding = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.Protos.ResponseEnvelope.prototype.clearContentEncoding = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.ResponseEnvelope.prototype.hasContentEncoding = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string stack_trace = 8;
 * @return {string}
 */
proto.Protos.ResponseEnvelope.prototype.getStackTrace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.Protos.ResponseEnvelope.prototype.setStackTrace = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.Protos.ResponseEnvelope.prototype.clearStackTrace = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.ResponseEnvelope.prototype.hasStackTrace = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated DynamicMessage dynamic_message = 9;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.Protos.DynamicMessage>}
 */
proto.Protos.ResponseEnvelope.prototype.getDynamicMessageList = function() {
  return /** @type{!Array.<!proto.Protos.DynamicMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Protos.DynamicMessage, 9));
};


/** @param {!Array.<!proto.Protos.DynamicMessage>} value */
proto.Protos.ResponseEnvelope.prototype.setDynamicMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.Protos.DynamicMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Protos.DynamicMessage}
 */
proto.Protos.ResponseEnvelope.prototype.addDynamicMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.Protos.DynamicMessage, opt_index);
};


proto.Protos.ResponseEnvelope.prototype.clearDynamicMessageList = function() {
  this.setDynamicMessageList([]);
};


/**
 * optional string maintenance_message = 10;
 * @return {string}
 */
proto.Protos.ResponseEnvelope.prototype.getMaintenanceMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.Protos.ResponseEnvelope.prototype.setMaintenanceMessage = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.Protos.ResponseEnvelope.prototype.clearMaintenanceMessage = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.ResponseEnvelope.prototype.hasMaintenanceMessage = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string maintenance_link = 11;
 * @return {string}
 */
proto.Protos.ResponseEnvelope.prototype.getMaintenanceLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.Protos.ResponseEnvelope.prototype.setMaintenanceLink = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.Protos.ResponseEnvelope.prototype.clearMaintenanceLink = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.ResponseEnvelope.prototype.hasMaintenanceLink = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 sub_code = 12;
 * @return {number}
 */
proto.Protos.ResponseEnvelope.prototype.getSubCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.Protos.ResponseEnvelope.prototype.setSubCode = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.Protos.ResponseEnvelope.prototype.clearSubCode = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.ResponseEnvelope.prototype.hasSubCode = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * @enum {number}
 */
proto.Protos.ContentEncoding = {
  DEFAULTCONTENTENCODING: 0,
  GZIPCONTENTENCODING: 1
};

/**
 * @enum {number}
 */
proto.Protos.ResponseCode = {
  OK: 1,
  ERROR: 2,
  SERVERERROR: 3,
  SESSIONEXPIRED: 4,
  AUTHFAILED: 5,
  RATEEXCEEDED: 6,
  SERVERUNAVAILABLE: 7,
  INVALIDREQUEST: 8,
  INVALIDDATA: 9,
  LEADERBOARDMATCHMAKINGERROR: 10,
  UNAUTHORIZED: 11,
  SUSPENDED: 12,
  SERVEROUTAGE: 13,
  NETWORKUNAVAILABLE: 20,
  SEQUENCEHIGH: 30,
  SEQUENCELOW: 31,
  RECORDNOTFOUND: 32,
  EVENTNOTFOUND: 33,
  INSUFFICIENTRESOURCES: 40,
  INVALIDCLIENTVERSION: 50,
  FORCECLIENTRESTART: 51,
  INCOMPATIBLEDEVICE: 52,
  ACCOUNTUPDATED: 53,
  INVALIDRECEIPT: 60,
  PAYMENTPENDING: 61,
  OPPONENTINBATTLE: 71,
  UNDERATTACK: 72,
  OPPONENTDATASTALE: 73,
  BATTLETIMEDOUT: 74,
  PLAYERRANKSTALE: 75
};

goog.object.extend(exports, proto.Protos);
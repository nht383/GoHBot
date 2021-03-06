/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Protos.AcceptEncoding', null, global);
goog.exportSymbol('proto.Protos.RequestEnvelope', null, global);

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
proto.Protos.RequestEnvelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Protos.RequestEnvelope.repeatedFields_, null);
};
goog.inherits(proto.Protos.RequestEnvelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Protos.RequestEnvelope.displayName = 'proto.Protos.RequestEnvelope';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Protos.RequestEnvelope.repeatedFields_ = [18,19];



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
proto.Protos.RequestEnvelope.prototype.toObject = function(opt_includeInstance) {
  return proto.Protos.RequestEnvelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Protos.RequestEnvelope} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Protos.RequestEnvelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    correlationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    serviceName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    methodName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    payload: msg.getPayload_asB64(),
    authId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    authToken: jspb.Message.getFieldWithDefault(msg, 8, ""),
    clientVersion: jspb.Message.getFieldWithDefault(msg, 9, 0),
    clientStartupTimestamp: jspb.Message.getFieldWithDefault(msg, 11, 0),
    platform: jspb.Message.getFieldWithDefault(msg, 12, ""),
    region: jspb.Message.getFieldWithDefault(msg, 13, ""),
    clientExternalVersion: jspb.Message.getFieldWithDefault(msg, 14, ""),
    clientInternalVersion: jspb.Message.getFieldWithDefault(msg, 15, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    acceptEncoding: jspb.Message.getFieldWithDefault(msg, 17, 0),
    flagList: jspb.Message.getField(msg, 18),
    telemetryEventList: jspb.Message.getField(msg, 19),
    currentClientTime: jspb.Message.getFieldWithDefault(msg, 20, 0),
    nimbleSessionId: jspb.Message.getFieldWithDefault(msg, 21, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 22, ""),
    firmwareVersion: jspb.Message.getFieldWithDefault(msg, 23, ""),
    carrier: jspb.Message.getFieldWithDefault(msg, 24, ""),
    networkAccess: jspb.Message.getFieldWithDefault(msg, 25, ""),
    hardwareId: jspb.Message.getFieldWithDefault(msg, 26, ""),
    advertiserId: jspb.Message.getFieldWithDefault(msg, 27, ""),
    vendorId: jspb.Message.getFieldWithDefault(msg, 28, ""),
    androidId: jspb.Message.getFieldWithDefault(msg, 29, ""),
    jailbrokenFlag: jspb.Message.getFieldWithDefault(msg, 30, 0),
    piracyFlag: jspb.Message.getFieldWithDefault(msg, 31, 0),
    synergyId: jspb.Message.getFieldWithDefault(msg, 32, ""),
    deviceModel: jspb.Message.getFieldWithDefault(msg, 33, ""),
    deviceId: jspb.Message.getFieldWithDefault(msg, 34, "")
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
 * @return {!proto.Protos.RequestEnvelope}
 */
proto.Protos.RequestEnvelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Protos.RequestEnvelope;
  return proto.Protos.RequestEnvelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Protos.RequestEnvelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Protos.RequestEnvelope}
 */
proto.Protos.RequestEnvelope.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthToken(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setClientVersion(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClientStartupTimestamp(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientExternalVersion(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientInternalVersion(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 17:
      var value = /** @type {!proto.Protos.AcceptEncoding} */ (reader.readEnum());
      msg.setAcceptEncoding(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.addFlag(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.addTelemetryEvent(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentClientTime(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setNimbleSessionId(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirmwareVersion(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setCarrier(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkAccess(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setHardwareId(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdvertiserId(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setVendorId(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setAndroidId(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJailbrokenFlag(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPiracyFlag(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setSynergyId(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceModel(value);
      break;
    case 34:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
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
 * @param {!proto.Protos.RequestEnvelope} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Protos.RequestEnvelope.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Protos.RequestEnvelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.Protos.RequestEnvelope.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(this, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(this, 6));
  if (f != null) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 7));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {number} */ (jspb.Message.getField(this, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 11));
  if (f != null) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = /** @type {!proto.Protos.AcceptEncoding} */ (jspb.Message.getField(this, 17));
  if (f != null) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = this.getFlagList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      18,
      f
    );
  }
  f = this.getTelemetryEventList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 20));
  if (f != null) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 21));
  if (f != null) {
    writer.writeString(
      21,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 22));
  if (f != null) {
    writer.writeString(
      22,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 23));
  if (f != null) {
    writer.writeString(
      23,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 24));
  if (f != null) {
    writer.writeString(
      24,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 25));
  if (f != null) {
    writer.writeString(
      25,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 26));
  if (f != null) {
    writer.writeString(
      26,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 27));
  if (f != null) {
    writer.writeString(
      27,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 28));
  if (f != null) {
    writer.writeString(
      28,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 29));
  if (f != null) {
    writer.writeString(
      29,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 30));
  if (f != null) {
    writer.writeInt32(
      30,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 31));
  if (f != null) {
    writer.writeInt32(
      31,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 32));
  if (f != null) {
    writer.writeString(
      32,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 33));
  if (f != null) {
    writer.writeString(
      33,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 34));
  if (f != null) {
    writer.writeString(
      34,
      f
    );
  }
};


/**
 * optional int32 correlation_id = 1;
 * @return {number}
 */
proto.Protos.RequestEnvelope.prototype.getCorrelationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Protos.RequestEnvelope.prototype.setCorrelationId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.Protos.RequestEnvelope.prototype.clearCorrelationId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasCorrelationId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string service_name = 4;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setServiceName = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.Protos.RequestEnvelope.prototype.clearServiceName = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasServiceName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string method_name = 5;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setMethodName = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.Protos.RequestEnvelope.prototype.clearMethodName = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasMethodName = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes payload = 6;
 * @return {!(string|Uint8Array)}
 */
proto.Protos.RequestEnvelope.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes payload = 6;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.Protos.RequestEnvelope.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/** @param {!(string|Uint8Array)} value */
proto.Protos.RequestEnvelope.prototype.setPayload = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.Protos.RequestEnvelope.prototype.clearPayload = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string auth_id = 7;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getAuthId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setAuthId = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.Protos.RequestEnvelope.prototype.clearAuthId = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasAuthId = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string auth_token = 8;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getAuthToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setAuthToken = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.Protos.RequestEnvelope.prototype.clearAuthToken = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasAuthToken = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 client_version = 9;
 * @return {number}
 */
proto.Protos.RequestEnvelope.prototype.getClientVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.Protos.RequestEnvelope.prototype.setClientVersion = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.Protos.RequestEnvelope.prototype.clearClientVersion = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasClientVersion = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 client_startup_timestamp = 11;
 * @return {number}
 */
proto.Protos.RequestEnvelope.prototype.getClientStartupTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.Protos.RequestEnvelope.prototype.setClientStartupTimestamp = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.Protos.RequestEnvelope.prototype.clearClientStartupTimestamp = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasClientStartupTimestamp = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string platform = 12;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setPlatform = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.Protos.RequestEnvelope.prototype.clearPlatform = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasPlatform = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string region = 13;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setRegion = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.Protos.RequestEnvelope.prototype.clearRegion = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string client_external_version = 14;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getClientExternalVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setClientExternalVersion = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.Protos.RequestEnvelope.prototype.clearClientExternalVersion = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasClientExternalVersion = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string client_internal_version = 15;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getClientInternalVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setClientInternalVersion = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.Protos.RequestEnvelope.prototype.clearClientInternalVersion = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasClientInternalVersion = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string request_id = 16;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setRequestId = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.Protos.RequestEnvelope.prototype.clearRequestId = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional AcceptEncoding accept_encoding = 17;
 * @return {!proto.Protos.AcceptEncoding}
 */
proto.Protos.RequestEnvelope.prototype.getAcceptEncoding = function() {
  return /** @type {!proto.Protos.AcceptEncoding} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {!proto.Protos.AcceptEncoding} value */
proto.Protos.RequestEnvelope.prototype.setAcceptEncoding = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.Protos.RequestEnvelope.prototype.clearAcceptEncoding = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasAcceptEncoding = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * repeated string flag = 18;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.Protos.RequestEnvelope.prototype.getFlagList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 18));
};


/** @param {!Array.<string>} value */
proto.Protos.RequestEnvelope.prototype.setFlagList = function(value) {
  jspb.Message.setField(this, 18, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.Protos.RequestEnvelope.prototype.addFlag = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 18, value, opt_index);
};


proto.Protos.RequestEnvelope.prototype.clearFlagList = function() {
  this.setFlagList([]);
};


/**
 * repeated string telemetry_event = 19;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.Protos.RequestEnvelope.prototype.getTelemetryEventList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 19));
};


/** @param {!Array.<string>} value */
proto.Protos.RequestEnvelope.prototype.setTelemetryEventList = function(value) {
  jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.Protos.RequestEnvelope.prototype.addTelemetryEvent = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


proto.Protos.RequestEnvelope.prototype.clearTelemetryEventList = function() {
  this.setTelemetryEventList([]);
};


/**
 * optional int64 current_client_time = 20;
 * @return {number}
 */
proto.Protos.RequestEnvelope.prototype.getCurrentClientTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/** @param {number} value */
proto.Protos.RequestEnvelope.prototype.setCurrentClientTime = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.Protos.RequestEnvelope.prototype.clearCurrentClientTime = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasCurrentClientTime = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional string nimble_session_id = 21;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getNimbleSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setNimbleSessionId = function(value) {
  jspb.Message.setField(this, 21, value);
};


proto.Protos.RequestEnvelope.prototype.clearNimbleSessionId = function() {
  jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasNimbleSessionId = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string timezone = 22;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setTimezone = function(value) {
  jspb.Message.setField(this, 22, value);
};


proto.Protos.RequestEnvelope.prototype.clearTimezone = function() {
  jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasTimezone = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional string firmware_version = 23;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getFirmwareVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setFirmwareVersion = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.Protos.RequestEnvelope.prototype.clearFirmwareVersion = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasFirmwareVersion = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional string carrier = 24;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getCarrier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setCarrier = function(value) {
  jspb.Message.setField(this, 24, value);
};


proto.Protos.RequestEnvelope.prototype.clearCarrier = function() {
  jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasCarrier = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional string network_access = 25;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getNetworkAccess = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setNetworkAccess = function(value) {
  jspb.Message.setField(this, 25, value);
};


proto.Protos.RequestEnvelope.prototype.clearNetworkAccess = function() {
  jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasNetworkAccess = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional string hardware_id = 26;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getHardwareId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setHardwareId = function(value) {
  jspb.Message.setField(this, 26, value);
};


proto.Protos.RequestEnvelope.prototype.clearHardwareId = function() {
  jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasHardwareId = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional string advertiser_id = 27;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getAdvertiserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setAdvertiserId = function(value) {
  jspb.Message.setField(this, 27, value);
};


proto.Protos.RequestEnvelope.prototype.clearAdvertiserId = function() {
  jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasAdvertiserId = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional string vendor_id = 28;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getVendorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setVendorId = function(value) {
  jspb.Message.setField(this, 28, value);
};


proto.Protos.RequestEnvelope.prototype.clearVendorId = function() {
  jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasVendorId = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional string android_id = 29;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getAndroidId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setAndroidId = function(value) {
  jspb.Message.setField(this, 29, value);
};


proto.Protos.RequestEnvelope.prototype.clearAndroidId = function() {
  jspb.Message.setField(this, 29, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasAndroidId = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional int32 jailbroken_flag = 30;
 * @return {number}
 */
proto.Protos.RequestEnvelope.prototype.getJailbrokenFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/** @param {number} value */
proto.Protos.RequestEnvelope.prototype.setJailbrokenFlag = function(value) {
  jspb.Message.setField(this, 30, value);
};


proto.Protos.RequestEnvelope.prototype.clearJailbrokenFlag = function() {
  jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasJailbrokenFlag = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional int32 piracy_flag = 31;
 * @return {number}
 */
proto.Protos.RequestEnvelope.prototype.getPiracyFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/** @param {number} value */
proto.Protos.RequestEnvelope.prototype.setPiracyFlag = function(value) {
  jspb.Message.setField(this, 31, value);
};


proto.Protos.RequestEnvelope.prototype.clearPiracyFlag = function() {
  jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasPiracyFlag = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional string synergy_id = 32;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getSynergyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setSynergyId = function(value) {
  jspb.Message.setField(this, 32, value);
};


proto.Protos.RequestEnvelope.prototype.clearSynergyId = function() {
  jspb.Message.setField(this, 32, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasSynergyId = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional string device_model = 33;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getDeviceModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setDeviceModel = function(value) {
  jspb.Message.setField(this, 33, value);
};


proto.Protos.RequestEnvelope.prototype.clearDeviceModel = function() {
  jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasDeviceModel = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional string device_id = 34;
 * @return {string}
 */
proto.Protos.RequestEnvelope.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 34, ""));
};


/** @param {string} value */
proto.Protos.RequestEnvelope.prototype.setDeviceId = function(value) {
  jspb.Message.setField(this, 34, value);
};


proto.Protos.RequestEnvelope.prototype.clearDeviceId = function() {
  jspb.Message.setField(this, 34, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Protos.RequestEnvelope.prototype.hasDeviceId = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * @enum {number}
 */
proto.Protos.AcceptEncoding = {
  DEFAULTACCEPTENCODING: 0,
  GZIPACCEPTENCODING: 1
};

goog.object.extend(exports, proto.Protos);

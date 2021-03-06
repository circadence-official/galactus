// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        (unknown)
// source: core/commandhandler/v1/commandhandler.proto

package v1

import (
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	_ "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// TODO: need to change this to the same pattern as Events
type ApplyCommandRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the integer identifier (enum value) of the event type this command belongs to
	// NOTE: this is simply an integer to keep the commandhandler from depending on changing types
	EventType int64 `protobuf:"varint,1,opt,name=event_type,json=eventType,proto3" json:"event_type,omitempty"`
	// the integer identifier (enum value) of the aggregate type this command belongs to
	// NOTE: this is simply an integer to keep the commandhandler from depending on changing types
	AggregateType int64 `protobuf:"varint,2,opt,name=aggregate_type,json=aggregateType,proto3" json:"aggregate_type,omitempty"`
	// the id of the aggregate that this event belongs to
	AggregateId string `protobuf:"bytes,3,opt,name=aggregate_id,json=aggregateId,proto3" json:"aggregate_id,omitempty"`
	// data representing the change to state of the system that this command encapsulates
	// it is saved as a json string so that the eventstore can be completey agnostic to the
	// the data structure of the system (and thus be a static service)
	// this data MUST be able to be unmarshalled into a Proto message type
	CommandData string `protobuf:"bytes,4,opt,name=command_data,json=commandData,proto3" json:"command_data,omitempty"`
}

func (x *ApplyCommandRequest) Reset() {
	*x = ApplyCommandRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_core_commandhandler_v1_commandhandler_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApplyCommandRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApplyCommandRequest) ProtoMessage() {}

func (x *ApplyCommandRequest) ProtoReflect() protoreflect.Message {
	mi := &file_core_commandhandler_v1_commandhandler_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApplyCommandRequest.ProtoReflect.Descriptor instead.
func (*ApplyCommandRequest) Descriptor() ([]byte, []int) {
	return file_core_commandhandler_v1_commandhandler_proto_rawDescGZIP(), []int{0}
}

func (x *ApplyCommandRequest) GetEventType() int64 {
	if x != nil {
		return x.EventType
	}
	return 0
}

func (x *ApplyCommandRequest) GetAggregateType() int64 {
	if x != nil {
		return x.AggregateType
	}
	return 0
}

func (x *ApplyCommandRequest) GetAggregateId() string {
	if x != nil {
		return x.AggregateId
	}
	return ""
}

func (x *ApplyCommandRequest) GetCommandData() string {
	if x != nil {
		return x.CommandData
	}
	return ""
}

type ApplyCommandResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id            string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	TransactionId string `protobuf:"bytes,2,opt,name=transaction_id,json=transactionId,proto3" json:"transaction_id,omitempty"`
}

func (x *ApplyCommandResponse) Reset() {
	*x = ApplyCommandResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_core_commandhandler_v1_commandhandler_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApplyCommandResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApplyCommandResponse) ProtoMessage() {}

func (x *ApplyCommandResponse) ProtoReflect() protoreflect.Message {
	mi := &file_core_commandhandler_v1_commandhandler_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApplyCommandResponse.ProtoReflect.Descriptor instead.
func (*ApplyCommandResponse) Descriptor() ([]byte, []int) {
	return file_core_commandhandler_v1_commandhandler_proto_rawDescGZIP(), []int{1}
}

func (x *ApplyCommandResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *ApplyCommandResponse) GetTransactionId() string {
	if x != nil {
		return x.TransactionId
	}
	return ""
}

var File_core_commandhandler_v1_commandhandler_proto protoreflect.FileDescriptor

var file_core_commandhandler_v1_commandhandler_proto_rawDesc = []byte{
	0x0a, 0x2b, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x68, 0x61,
	0x6e, 0x64, 0x6c, 0x65, 0x72, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64,
	0x68, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x16, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x68, 0x61, 0x6e, 0x64, 0x6c,
	0x65, 0x72, 0x2e, 0x76, 0x31, 0x1a, 0x17, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f,
	0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0xab, 0x01, 0x0a, 0x13, 0x41, 0x70, 0x70, 0x6c, 0x79, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x65, 0x76, 0x65, 0x6e, 0x74,
	0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x65, 0x76, 0x65,
	0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x61, 0x67, 0x67, 0x72, 0x65, 0x67,
	0x61, 0x74, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0d,
	0x61, 0x67, 0x67, 0x72, 0x65, 0x67, 0x61, 0x74, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x2b, 0x0a,
	0x0c, 0x61, 0x67, 0x67, 0x72, 0x65, 0x67, 0x61, 0x74, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0xb0, 0x01, 0x01, 0x52, 0x0b, 0x61,
	0x67, 0x67, 0x72, 0x65, 0x67, 0x61, 0x74, 0x65, 0x49, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x6f,
	0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0b, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x44, 0x61, 0x74, 0x61, 0x22, 0x4d, 0x0a,
	0x14, 0x41, 0x70, 0x70, 0x6c, 0x79, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x25, 0x0a, 0x0e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x74,
	0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x32, 0x76, 0x0a, 0x0e,
	0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x12, 0x64,
	0x0a, 0x05, 0x41, 0x70, 0x70, 0x6c, 0x79, 0x12, 0x2b, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x63,
	0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x68, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x2e, 0x76, 0x31,
	0x2e, 0x41, 0x70, 0x70, 0x6c, 0x79, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x63, 0x6f, 0x6d, 0x6d,
	0x61, 0x6e, 0x64, 0x68, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x70,
	0x70, 0x6c, 0x79, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x00, 0x42, 0x4b, 0x5a, 0x49, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x63, 0x69, 0x72, 0x63, 0x61, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x2d, 0x6f, 0x66,
	0x66, 0x69, 0x63, 0x69, 0x61, 0x6c, 0x2f, 0x67, 0x61, 0x6c, 0x61, 0x63, 0x74, 0x75, 0x73, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x63, 0x6f, 0x72, 0x65, 0x2f,
	0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x68, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x2f, 0x76,
	0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_core_commandhandler_v1_commandhandler_proto_rawDescOnce sync.Once
	file_core_commandhandler_v1_commandhandler_proto_rawDescData = file_core_commandhandler_v1_commandhandler_proto_rawDesc
)

func file_core_commandhandler_v1_commandhandler_proto_rawDescGZIP() []byte {
	file_core_commandhandler_v1_commandhandler_proto_rawDescOnce.Do(func() {
		file_core_commandhandler_v1_commandhandler_proto_rawDescData = protoimpl.X.CompressGZIP(file_core_commandhandler_v1_commandhandler_proto_rawDescData)
	})
	return file_core_commandhandler_v1_commandhandler_proto_rawDescData
}

var file_core_commandhandler_v1_commandhandler_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_core_commandhandler_v1_commandhandler_proto_goTypes = []interface{}{
	(*ApplyCommandRequest)(nil),  // 0: core.commandhandler.v1.ApplyCommandRequest
	(*ApplyCommandResponse)(nil), // 1: core.commandhandler.v1.ApplyCommandResponse
}
var file_core_commandhandler_v1_commandhandler_proto_depIdxs = []int32{
	0, // 0: core.commandhandler.v1.CommandHandler.Apply:input_type -> core.commandhandler.v1.ApplyCommandRequest
	1, // 1: core.commandhandler.v1.CommandHandler.Apply:output_type -> core.commandhandler.v1.ApplyCommandResponse
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_core_commandhandler_v1_commandhandler_proto_init() }
func file_core_commandhandler_v1_commandhandler_proto_init() {
	if File_core_commandhandler_v1_commandhandler_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_core_commandhandler_v1_commandhandler_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApplyCommandRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_core_commandhandler_v1_commandhandler_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApplyCommandResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_core_commandhandler_v1_commandhandler_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_core_commandhandler_v1_commandhandler_proto_goTypes,
		DependencyIndexes: file_core_commandhandler_v1_commandhandler_proto_depIdxs,
		MessageInfos:      file_core_commandhandler_v1_commandhandler_proto_msgTypes,
	}.Build()
	File_core_commandhandler_v1_commandhandler_proto = out.File
	file_core_commandhandler_v1_commandhandler_proto_rawDesc = nil
	file_core_commandhandler_v1_commandhandler_proto_goTypes = nil
	file_core_commandhandler_v1_commandhandler_proto_depIdxs = nil
}

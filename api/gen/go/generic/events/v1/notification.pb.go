// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        (unknown)
// source: generic/events/v1/notification.proto

package v1

import (
	v1 "github.com/circadence-official/galactus/api/gen/go/core/notifier/v1"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type NotificationEventCode int32

const (
	NotificationEventCode_INVALID_NOTIFICATION_EVENT_CODE NotificationEventCode = 0
	NotificationEventCode_NOTIFICATION_DELIVERY_REQUESTED NotificationEventCode = 1
	NotificationEventCode_NOTIFICATION_DELIVERED          NotificationEventCode = 2
)

// Enum value maps for NotificationEventCode.
var (
	NotificationEventCode_name = map[int32]string{
		0: "INVALID_NOTIFICATION_EVENT_CODE",
		1: "NOTIFICATION_DELIVERY_REQUESTED",
		2: "NOTIFICATION_DELIVERED",
	}
	NotificationEventCode_value = map[string]int32{
		"INVALID_NOTIFICATION_EVENT_CODE": 0,
		"NOTIFICATION_DELIVERY_REQUESTED": 1,
		"NOTIFICATION_DELIVERED":          2,
	}
)

func (x NotificationEventCode) Enum() *NotificationEventCode {
	p := new(NotificationEventCode)
	*p = x
	return p
}

func (x NotificationEventCode) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (NotificationEventCode) Descriptor() protoreflect.EnumDescriptor {
	return file_generic_events_v1_notification_proto_enumTypes[0].Descriptor()
}

func (NotificationEventCode) Type() protoreflect.EnumType {
	return &file_generic_events_v1_notification_proto_enumTypes[0]
}

func (x NotificationEventCode) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use NotificationEventCode.Descriptor instead.
func (NotificationEventCode) EnumDescriptor() ([]byte, []int) {
	return file_generic_events_v1_notification_proto_rawDescGZIP(), []int{0}
}

// NotificationDeliveryRequested is an event used to send a message to an actor connected the `notifier` service.
// `Multicast`, is the default delivery type and a `actor_id` is required. If `Unicast` is desired (i.e Sending a notification
// to only one client) Then a `client_id` should also be provided.
//    {
//      "actor_id": "cffbbfa8-1a7e-4b64-af2e-345654b37aa7",
//      "client_id": "07925e22-3eee-4931-aea9-19fc621fd825",
//      "notification": "<NOTIFICATION_MESSAGE>"
//    }
type NotificationDeliveryRequested struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// `actor_id` is the identifier of a actor, a message should be sent to (think phone number). For example, if it's a user connected to the notifier service with the web-client then `actor_id`
	// is equal to the `user_id` if it's `MinionD` connected to the `notifier` service then the `actor_id` is equal to the `instance_id`.
	// Using the `actor_id` instead of a specific `user_id` field allows for many differnt types of client connections to the notifier and gives the system a common way
	// to send data to those connected clients whitout having to change the underlying datastructure when adding new clients.
	ActorId string `protobuf:"bytes,1,opt,name=actor_id,json=actorId,proto3" json:"actor_id,omitempty"`
	// optional, specify only if `unicast` to one client is desired.
	ClientId string `protobuf:"bytes,2,opt,name=client_id,json=clientId,proto3" json:"client_id,omitempty"`
	// notification is the data payload that will be sent the client.
	Notification *v1.Notification `protobuf:"bytes,3,opt,name=notification,proto3" json:"notification,omitempty"`
}

func (x *NotificationDeliveryRequested) Reset() {
	*x = NotificationDeliveryRequested{}
	if protoimpl.UnsafeEnabled {
		mi := &file_generic_events_v1_notification_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NotificationDeliveryRequested) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NotificationDeliveryRequested) ProtoMessage() {}

func (x *NotificationDeliveryRequested) ProtoReflect() protoreflect.Message {
	mi := &file_generic_events_v1_notification_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NotificationDeliveryRequested.ProtoReflect.Descriptor instead.
func (*NotificationDeliveryRequested) Descriptor() ([]byte, []int) {
	return file_generic_events_v1_notification_proto_rawDescGZIP(), []int{0}
}

func (x *NotificationDeliveryRequested) GetActorId() string {
	if x != nil {
		return x.ActorId
	}
	return ""
}

func (x *NotificationDeliveryRequested) GetClientId() string {
	if x != nil {
		return x.ClientId
	}
	return ""
}

func (x *NotificationDeliveryRequested) GetNotification() *v1.Notification {
	if x != nil {
		return x.Notification
	}
	return nil
}

type NotificationDelivered struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *NotificationDelivered) Reset() {
	*x = NotificationDelivered{}
	if protoimpl.UnsafeEnabled {
		mi := &file_generic_events_v1_notification_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NotificationDelivered) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NotificationDelivered) ProtoMessage() {}

func (x *NotificationDelivered) ProtoReflect() protoreflect.Message {
	mi := &file_generic_events_v1_notification_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NotificationDelivered.ProtoReflect.Descriptor instead.
func (*NotificationDelivered) Descriptor() ([]byte, []int) {
	return file_generic_events_v1_notification_proto_rawDescGZIP(), []int{1}
}

var File_generic_events_v1_notification_proto protoreflect.FileDescriptor

var file_generic_events_v1_notification_proto_rawDesc = []byte{
	0x0a, 0x24, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x69, 0x63, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73,
	0x2f, 0x76, 0x31, 0x2f, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x11, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x69, 0x63, 0x2e,
	0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x1a, 0x1f, 0x63, 0x6f, 0x72, 0x65, 0x2f,
	0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x2f, 0x76, 0x31, 0x2f, 0x6e, 0x6f, 0x74, 0x69,
	0x66, 0x69, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x9b, 0x01, 0x0a, 0x1d, 0x4e,
	0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x6c, 0x69, 0x76,
	0x65, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x65, 0x64, 0x12, 0x19, 0x0a, 0x08,
	0x61, 0x63, 0x74, 0x6f, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x61, 0x63, 0x74, 0x6f, 0x72, 0x49, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x63, 0x6c, 0x69, 0x65, 0x6e,
	0x74, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x6c, 0x69, 0x65,
	0x6e, 0x74, 0x49, 0x64, 0x12, 0x42, 0x0a, 0x0c, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x63, 0x6f, 0x72,
	0x65, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x2e, 0x4e, 0x6f,
	0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0c, 0x6e, 0x6f, 0x74, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x17, 0x0a, 0x15, 0x4e, 0x6f, 0x74, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x65,
	0x64, 0x2a, 0x7d, 0x0a, 0x15, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x23, 0x0a, 0x1f, 0x49, 0x4e,
	0x56, 0x41, 0x4c, 0x49, 0x44, 0x5f, 0x4e, 0x4f, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x49,
	0x4f, 0x4e, 0x5f, 0x45, 0x56, 0x45, 0x4e, 0x54, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x10, 0x00, 0x12,
	0x23, 0x0a, 0x1f, 0x4e, 0x4f, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x5f,
	0x44, 0x45, 0x4c, 0x49, 0x56, 0x45, 0x52, 0x59, 0x5f, 0x52, 0x45, 0x51, 0x55, 0x45, 0x53, 0x54,
	0x45, 0x44, 0x10, 0x01, 0x12, 0x1a, 0x0a, 0x16, 0x4e, 0x4f, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41,
	0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x44, 0x45, 0x4c, 0x49, 0x56, 0x45, 0x52, 0x45, 0x44, 0x10, 0x02,
	0x42, 0x46, 0x5a, 0x44, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63,
	0x69, 0x72, 0x63, 0x61, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x2d, 0x6f, 0x66, 0x66, 0x69, 0x63, 0x69,
	0x61, 0x6c, 0x2f, 0x67, 0x61, 0x6c, 0x61, 0x63, 0x74, 0x75, 0x73, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x69, 0x63, 0x2f, 0x65,
	0x76, 0x65, 0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_generic_events_v1_notification_proto_rawDescOnce sync.Once
	file_generic_events_v1_notification_proto_rawDescData = file_generic_events_v1_notification_proto_rawDesc
)

func file_generic_events_v1_notification_proto_rawDescGZIP() []byte {
	file_generic_events_v1_notification_proto_rawDescOnce.Do(func() {
		file_generic_events_v1_notification_proto_rawDescData = protoimpl.X.CompressGZIP(file_generic_events_v1_notification_proto_rawDescData)
	})
	return file_generic_events_v1_notification_proto_rawDescData
}

var file_generic_events_v1_notification_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_generic_events_v1_notification_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_generic_events_v1_notification_proto_goTypes = []interface{}{
	(NotificationEventCode)(0),            // 0: generic.events.v1.NotificationEventCode
	(*NotificationDeliveryRequested)(nil), // 1: generic.events.v1.NotificationDeliveryRequested
	(*NotificationDelivered)(nil),         // 2: generic.events.v1.NotificationDelivered
	(*v1.Notification)(nil),               // 3: core.notifier.v1.Notification
}
var file_generic_events_v1_notification_proto_depIdxs = []int32{
	3, // 0: generic.events.v1.NotificationDeliveryRequested.notification:type_name -> core.notifier.v1.Notification
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_generic_events_v1_notification_proto_init() }
func file_generic_events_v1_notification_proto_init() {
	if File_generic_events_v1_notification_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_generic_events_v1_notification_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NotificationDeliveryRequested); i {
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
		file_generic_events_v1_notification_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NotificationDelivered); i {
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
			RawDescriptor: file_generic_events_v1_notification_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_generic_events_v1_notification_proto_goTypes,
		DependencyIndexes: file_generic_events_v1_notification_proto_depIdxs,
		EnumInfos:         file_generic_events_v1_notification_proto_enumTypes,
		MessageInfos:      file_generic_events_v1_notification_proto_msgTypes,
	}.Build()
	File_generic_events_v1_notification_proto = out.File
	file_generic_events_v1_notification_proto_rawDesc = nil
	file_generic_events_v1_notification_proto_goTypes = nil
	file_generic_events_v1_notification_proto_depIdxs = nil
}
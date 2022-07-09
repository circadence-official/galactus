// Code generated by mockery v2.9.4. DO NOT EDIT.

package messagebus

import (
	context "context"

	logging "github.com/circadence-official/galactus/pkg/logging/v2"
	mock "github.com/stretchr/testify/mock"
)

// MockMessageBus is an autogenerated mock type for the MessageBus type
type MockMessageBus struct {
	mock.Mock
}

// CancelConsumerChannels provides a mock function with given fields: noWait
func (_m *MockMessageBus) CancelConsumerChannels(noWait bool) error {
	ret := _m.Called(noWait)

	var r0 error
	if rf, ok := ret.Get(0).(func(bool) error); ok {
		r0 = rf(noWait)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// CancelConsumerChannelsBySuffix provides a mock function with given fields: suffix, noWait
func (_m *MockMessageBus) CancelConsumerChannelsBySuffix(suffix string, noWait bool) error {
	ret := _m.Called(suffix, noWait)

	var r0 error
	if rf, ok := ret.Get(0).(func(string, bool) error); ok {
		r0 = rf(suffix, noWait)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// Connect provides a mock function with given fields: ctx, logger
func (_m *MockMessageBus) Connect(ctx context.Context, logger logging.Logger) error {
	ret := _m.Called(ctx, logger)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, logging.Logger) error); ok {
		r0 = rf(ctx, logger)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// Consume provides a mock function with given fields: ctx, queueName, routingKey, h, done
func (_m *MockMessageBus) Consume(ctx context.Context, queueName string, routingKey string, h ClientHandler, done chan<- DoneChannelResponse) error {
	ret := _m.Called(ctx, queueName, routingKey, h, done)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, string, string, ClientHandler, chan<- DoneChannelResponse) error); ok {
		r0 = rf(ctx, queueName, routingKey, h, done)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// RegisterExchange provides a mock function with given fields: ctx, exchange, kind
func (_m *MockMessageBus) RegisterExchange(ctx context.Context, exchange string, kind ExchangeKind) error {
	ret := _m.Called(ctx, exchange, kind)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, string, ExchangeKind) error); ok {
		r0 = rf(ctx, exchange, kind)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// RegisterQueue provides a mock function with given fields: ctx, queueName, exchangeName, routingKey
func (_m *MockMessageBus) RegisterQueue(ctx context.Context, queueName string, exchangeName string, routingKey string) error {
	ret := _m.Called(ctx, queueName, exchangeName, routingKey)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, string, string, string) error); ok {
		r0 = rf(ctx, queueName, exchangeName, routingKey)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// RegisterTopic provides a mock function with given fields: ctx, identifier, exchangeName, routingKey
func (_m *MockMessageBus) RegisterTopic(ctx context.Context, identifier string, exchangeName string, routingKey string) error {
	ret := _m.Called(ctx, identifier, exchangeName, routingKey)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, string, string, string) error); ok {
		r0 = rf(ctx, identifier, exchangeName, routingKey)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// SendMessage provides a mock function with given fields: ctx, exchange, routingKey, message
func (_m *MockMessageBus) SendMessage(ctx context.Context, exchange string, routingKey string, message interface{}) error {
	ret := _m.Called(ctx, exchange, routingKey, message)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, string, string, interface{}) error); ok {
		r0 = rf(ctx, exchange, routingKey, message)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// Shutdown provides a mock function with given fields: noWait
func (_m *MockMessageBus) Shutdown(noWait bool) error {
	ret := _m.Called(noWait)

	var r0 error
	if rf, ok := ret.Get(0).(func(bool) error); ok {
		r0 = rf(noWait)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apigateway = require("aws-cdk-lib/aws-apigateway");
const cloudfront = require("aws-cdk-lib/aws-cloudfront");
const cdk = require("aws-cdk-lib");
const integ_tests_alpha_1 = require("@aws-cdk/integ-tests-alpha");
const origins = require("aws-cdk-lib/aws-cloudfront-origins");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'integ-cloudfront-rest-api-origin');
const api = new apigateway.RestApi(stack, 'RestApi', { endpointTypes: [apigateway.EndpointType.REGIONAL], cloudWatchRole: true });
api.root.addMethod('GET');
new cloudfront.Distribution(stack, 'Distribution', {
    defaultBehavior: { origin: new origins.RestApiOrigin(api) },
});
new integ_tests_alpha_1.IntegTest(app, 'rest-api-origin', {
    testCases: [stack],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcucmVzdC1hcGktb3JpZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZWcucmVzdC1hcGktb3JpZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQXlEO0FBQ3pELHlEQUF5RDtBQUN6RCxtQ0FBbUM7QUFDbkMsa0VBQXVEO0FBQ3ZELDhEQUE4RDtBQUU5RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUUxQixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLGtDQUFrQyxDQUFDLENBQUM7QUFFckUsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xJLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTFCLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFO0lBQ2pELGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7Q0FDNUQsQ0FBQyxDQUFDO0FBRUgsSUFBSSw2QkFBUyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsRUFBRTtJQUNwQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDbkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtYXBpZ2F0ZXdheSc7XG5pbXBvcnQgKiBhcyBjbG91ZGZyb250IGZyb20gJ2F3cy1jZGstbGliL2F3cy1jbG91ZGZyb250JztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBJbnRlZ1Rlc3QgfSBmcm9tICdAYXdzLWNkay9pbnRlZy10ZXN0cy1hbHBoYSc7XG5pbXBvcnQgKiBhcyBvcmlnaW5zIGZyb20gJ2F3cy1jZGstbGliL2F3cy1jbG91ZGZyb250LW9yaWdpbnMnO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuXG5jb25zdCBzdGFjayA9IG5ldyBjZGsuU3RhY2soYXBwLCAnaW50ZWctY2xvdWRmcm9udC1yZXN0LWFwaS1vcmlnaW4nKTtcblxuY29uc3QgYXBpID0gbmV3IGFwaWdhdGV3YXkuUmVzdEFwaShzdGFjaywgJ1Jlc3RBcGknLCB7IGVuZHBvaW50VHlwZXM6IFthcGlnYXRld2F5LkVuZHBvaW50VHlwZS5SRUdJT05BTF0sIGNsb3VkV2F0Y2hSb2xlOiB0cnVlIH0pO1xuYXBpLnJvb3QuYWRkTWV0aG9kKCdHRVQnKTtcblxubmV3IGNsb3VkZnJvbnQuRGlzdHJpYnV0aW9uKHN0YWNrLCAnRGlzdHJpYnV0aW9uJywge1xuICBkZWZhdWx0QmVoYXZpb3I6IHsgb3JpZ2luOiBuZXcgb3JpZ2lucy5SZXN0QXBpT3JpZ2luKGFwaSkgfSxcbn0pO1xuXG5uZXcgSW50ZWdUZXN0KGFwcCwgJ3Jlc3QtYXBpLW9yaWdpbicsIHtcbiAgdGVzdENhc2VzOiBbc3RhY2tdLFxufSk7XG4iXX0=
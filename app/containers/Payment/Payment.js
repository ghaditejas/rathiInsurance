import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Form } from 'react-bootstrap';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Payment.scss";
import { getClientSecret } from '../../redux/actions/getClientSecret';

const CARD_ELEMENT_OPTIONS = {
	style: {
		base: {
			color: "#000",
			fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
			fontSmoothing: "antialiased",
			fontSize: '1rem',
			"::placeholder": {
				color: "#0d0d0d",
			},
		},
		invalid: {
			color: "#fa755a",
			iconColor: "#fa755a",
		},
	}
};

function Payment({ trans, orderData, clientSecretData, currencyCode, changeScreenNumber, ...props }) {
	console.log("Payment -> orderData", orderData);
	const history = useHistory();
	const stripe = useStripe();
	const elements = useElements();
	const [paymentResult, setPaymentResult] = useState({});
	const { clientSecretData: secretData } = clientSecretData;
	let result;
	console.log("Payment -> secretData", secretData)

	useEffect(() => {
		if (Object.keys(orderData).length > 0) {
			const clientSecretUrl = "/shop/checkout/payment";
			const clientSecretDataObj = {
				"amount": parseInt((orderData.grandTotal * 100).toFixed(2)),
				"currency": currencyCode,
				"description": "Customer Payment",
				"orderId": orderData.orderId
			};
			// console.log("Payment -> inside if", clientSecretDataObj)

			props.getClientSecret(clientSecretUrl, clientSecretDataObj);
		}
	}, [orderData && orderData.orderId]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		let clientSecret = (secretData && secretData.client_secret) ? secretData.client_secret : null;

		if (clientSecret) {
			// console.log("handleSubmit -> clientSecret", clientSecret)
			const { billingAddress } = orderData;
			let countryCode = billingAddress.country.split('');
			countryCode = (countryCode[0] + countryCode[1]).toUpperCase();
			result = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
					billing_details: {
						name: billingAddress.name,
						address: {
							city: billingAddress.city,
							country: countryCode,
							line1: billingAddress.landmarK,
							line2: billingAddress.landmarK,
							postal_code: billingAddress.pincode
						}
					}
				},
			});

			setPaymentResult(result);

		} else {
			setPaymentResult({ error: { message: "client secret key not available" } });
		}

		if (result && result.error) {
			console.log("error=>>", result.error.message);
		} else {
			if (result && result.paymentIntent) {
				changeScreenNumber(0);
				localStorage.setItem("pmtStat", "success");
				history.push('/order-summary');
			}
		}
	}

	return (
		<div className="form-container">
			<div className="payment-wrapper">
				<div className="form-detail">
					<Form onSubmit={handleSubmit}>
						<label>{trans("card_number")}</label>
						<CardElement
							options={CARD_ELEMENT_OPTIONS}
							onReady={() => {
								console.log("CardElement [ready]");
							}}
							onFocus={() => {
								console.log("CardElement [focus]");
							}}
						/>
						<div className="payment-btn-box">
							<Button type="submit">
								{trans("pay")}
							</Button>
							<h6 className="note">{trans("note")}: <span>{trans("payment_mssg")}</span></h6>

						</div>
						{paymentResult && paymentResult.error && <h2 className="error">{`Error: ${paymentResult.error.message}`}</h2>}
						{paymentResult && paymentResult.paymentIntent && <h2 className="success">{`Success`}</h2>}
					</Form>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	// console.log("mapStateToProps -> state", state.getClientSecretReducer)
	return {
		clientSecretData: state.getClientSecretReducer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getClientSecret: (url, params) => {
			dispatch(getClientSecret(url, params));
		}
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Payment);
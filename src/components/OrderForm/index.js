import React from 'react';
import Button from 'Components/Button';
import { innerServices } from 'Services';
import { useForm } from 'react-hook-form';
import Checkbox from 'Components/Checkbox';
import Textarea from 'Components/Textarea';
import TextInput from 'Components/TextInput';
import RadioButton from 'Components/RadioButton';

import style from './style.scss';

export const OrderForm = ({ fromPage = '', productName, btnOnClick }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, touchedFields, dirtyFields, isSubmitting },
    } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        const res =  await innerServices.sendUserData({
            formName: 'Форма замовлення',
            productName,
            fromPage,
            ...data
        });

        if (res.success) {
            reset();
            btnOnClick && btnOnClick();
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}  className={style.form} >
                <h4 className={style.title}>Форма замовлення</h4>
                <div className={style.content}>
                    <TextInput
                        className={style.input}
                        placeholder="Призвище Ім’я*"
                        isError={errors?.name?.message}
                        isValid={touchedFields?.name && !errors?.name && dirtyFields.name}
                        {...register('name', { required: 'Заповнить це поле' })}
                    />
                    <p className={style.messengersTitle}>Оберіть месенджер для зв'язку*</p>
                    <div className={style.messengers}>
                        {errors?.experience?.message && (
                            <div className={style.errorMessage}>
                                { errors.experience.message }
                            </div>
                        )}
                        <RadioButton
                            id="TelegramId"
                            value="Telegram"
                            registerProps={register('messenger', { required: 'Це поле обов\'язкове' })}
                        />
                        <RadioButton
                            id="ViberId"
                            value="Viber"
                            registerProps={register('messenger', { required: 'Це поле обов\'язкове' })}
                        />
                        <RadioButton
                            id="WhatsAppId"
                            value="WhatsApp"
                            registerProps={register('messenger', { required: 'Це поле обов\'язкове' })}
                        />
                    </div>
                    <TextInput
                        placeholder="Телефон або нікнейм з месенджера*"
                        className={style.input}
                        isError={errors?.phone?.message}
                        isValid={touchedFields?.phone && !errors?.phone && dirtyFields.phone}
                        {...register('phone', {
                            required: 'Заповнить це поле'
                        })}
                    />
                    <Textarea
                        placeholder="Ціль навчання"
                        isError={errors?.purpose?.message}
                        isValid={touchedFields?.purpose && !errors?.purpose && dirtyFields.purpose}
                        {...register('purpose')}
                    />
                    <Checkbox
                        className={style.checkbox}
                        isError={errors?.consent?.message}
                        registerProps={register('consent', { required: 'Це поле обов\'язкове' })}
                    >
                        даю згоду на обробку своїх персональних даних.
                        Підтверджую, що ознайомлений з Політикою обробки персональних даних*
                    </Checkbox>
                </div>
                <Button
                    variant="primary"
                    className={style.button}
                    disabled={!isValid || isSubmitting}
                >
                    Відправити
                </Button>
            </form>
        </>

    );
};

export default OrderForm;

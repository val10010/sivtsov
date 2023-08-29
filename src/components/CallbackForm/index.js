import React from 'react';
import Button from 'Components/Button';
import { innerServices } from 'Services';
import { useForm } from 'react-hook-form';
import Checkbox from 'Components/Checkbox';
import Textarea from 'Components/Textarea';
import TextInput from 'Components/TextInput';
import RadioButton from 'Components/RadioButton';

import style from './style.scss';

export const CallbackForm = ({ fromPage = 'зі сторінки учнів', btnOnClick }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, touchedFields, dirtyFields, isSubmitting },
    } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        const res =  await innerServices.sendUserData({
            formName: 'Форма зворотного зв\'язку',
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
                <h4 className={style.title}>Форма зворотного зв'язку</h4>
                <div className={style.content}>
                    <div className={style.block}>
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
                                value="Telegram"
                                registerProps={register('messenger', { required: 'Це поле обов\'язкове' })}
                            />
                            <RadioButton
                                value="Viber"
                                registerProps={register('messenger', { required: 'Це поле обов\'язкове' })}
                            />
                            <RadioButton
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
                            placeholder="Ціль навчання*"
                            isError={errors?.purpose?.message}
                            isValid={touchedFields?.purpose && !errors?.purpose && dirtyFields.purpose}
                            {...register('purpose', { required: 'Заповнить це поле' })}
                        />
                    </div>
                    <div className={style.block}>
                        <p className={style.radioBtnsTitle}>Чи є досвід вивченная англійської мови?*</p>
                        <div className={style.radioBtns}>
                            {errors?.experience?.message && (
                                <div className={style.errorMessage}>
                                    { errors.experience.message }
                                </div>
                            )}
                            <RadioButton
                                value="так"
                                className={style.radioBtn}
                                registerProps={register('experience', { required: 'Це поле обов\'язкове' })}
                            />
                            <RadioButton
                                value="ні"
                                registerProps={register('experience', { required: 'Це поле обов\'язкове' })}
                            />
                        </div>
                        <Textarea
                            placeholder="Коментар"
                            {...register('comment')}
                        />
                        <Checkbox
                            className={style.checkbox}
                            isError={errors?.consent?.message}
                            registerProps={register('consent', { required: 'Це поле обов\'язкове' })}
                        >
                            даю згоду на обробку своїх персональних даних.
                            Підтверджую, що ознайомлений з Політикою обробки персональних даних
                        </Checkbox>
                    </div>

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

export default CallbackForm;
